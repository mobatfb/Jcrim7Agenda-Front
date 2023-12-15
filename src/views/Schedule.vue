<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<template>
  <div>
    <center>
      <table style=" margin-bottom: 3px;border:solid .5pt;">
        <table name="YEAR" cellspacing=0 cellpadding=0 style='margin-bottom: 5px; border-collapse:collapse;'>
          <tr>
            <td>
              <v-btn :disabled="this.state.year == this.stateLimitBack.year" small
                @click="state.year--; state.month = 1; get()" rounded :color="$color.primary">
                <v-icon> mdi-arrow-left </v-icon>
              </v-btn>
            </td>
            <td width=200>
              <p align=center style='margin:0cm;text-align:center;'>{{ state.year }}</p>
            </td>
            <td>
              <v-btn :disabled="this.state.year == this.stateLimitNext.year" @click="state.year++; get(); state.month = 1"
                rounded small :color="$color.primary">
                <v-icon> mdi-arrow-right </v-icon>
              </v-btn>
            </td>
          </tr>
        </table>
        <table name="MONTH" cellspacing=0 cellpadding=0>
          <tr>
            <td>
              <v-btn style="float: right;"
                :disabled="this.state.year == this.stateLimitBack.year && this.state.month == this.stateLimitBack.month"
                @click="btnMonthBack()" rounded small :color="$color.primary">
                <v-icon> mdi-arrow-left </v-icon>
              </v-btn>
            </td>
            <td width=200>
              <p v-on:change="get()" align=center style='margin:0cm;text-align:center;'> {{
                calendar[state.year][state.month - 1].month }}</p>
            </td>
            <td>
              <v-btn style="float: left"
                :disabled="this.state.year == this.stateLimitNext.year && this.state.month == this.stateLimitNext.month"
                @click="btnMonthNext()" rounded small :color="$color.primary">
                <v-icon> mdi-arrow-right </v-icon>
              </v-btn>
            </td>
          </tr>
        </table>
      </table>
      <Loader v-if="waitForData" show message="''" />
      <div v-else style="overflow-x: scroll;
  overflow-y: scroll;
  width: 100%;height: 1000px;">
        <table name="SCHEDULE" class=tableMy style="cursor: default" border=1 cellspacing=0 cellpadding=0 width=1200px>
          <tr name="headerDaysWeek">
            <td v-for="day in daysWeek" v-show="day != 'SABADO' && day != 'DOMINGO'" :key="'Day:' + day" width=1000
              class="tdMy" style="background-color: yellow;">
              <p style="margin: 0cm; font-size:small;" align=center><b>{{ day }}</b></p>
            </td>
          </tr>
          <tr v-for="colS in 6" :key="'colsS:' + colS" :name="'colsS:' + colS">
            <td v-for="campoS in 7" v-show="campoS <= 5" :key="'campoS:' + campoS">
              <div v-if="($user.id).toUpperCase() == SUPERADMIN">
                <table name="miniTablaADMIN"
                  v-show="(((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start) <= calendar[state.year][state.month - 1].days"
                  v-if="((colS - 1) * 7) + campoS >= calendar[state.year][state.month - 1].start" border=1 cellspacing=0
                  cellpadding=0 style=' border-collapse:collapse; margin: 2px; width: 98%'>
                  <tr v-for="hour, index in hours" :key="'hour:' + hour" :name="'hour:' + hour">
                    <td v-if="hour == '09:00 - 10:00'" rowspan=4
                      :style="mySystem.year == state.year && mySystem.month == state.month && ((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start == mySystem.day ? 'background-color: yellow' : ''">
                      <p align=center style='margin-bottom:0cm;text-align:center'>
                        {{ returnformatDay(((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start)
                        }}
                      </p>
                    </td>
                    <td>
                      <p style="margin: 0cm; font-size: small" align=center><b>{{ hour }}</b></p>
                    </td>
                    <td v-if="index == 3" style='background:rgb(0, 174, 255); border:solid 1.0pt'>
                      <p style="cursor: not-allowed;margin: 0cm;font-size: small;"
                        @click="selected.dayWeek = daysWeek[campoS - 1]; selected.day = ((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start; selected.hour = hour; addCite('PRIORITY')"
                        align=center><b>RESERVADO</b> </p>
                    </td>
                    <td
                      v-else-if="fieldsState[((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start][index].status && fieldsState[((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start][index].userId.toUpperCase() == $user.id.toUpperCase()"
                      style='background:yellow; border:solid 1.0pt'>
                      <p style="cursor: pointer;margin: 0cm; cursor: pointer;font-size: small;"
                        @click="selected.dayWeek = daysWeek[campoS - 1]; selected.day = ((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start; selected.hour = hour; addCite('RESERVED')"
                        align=center><b>RESERVADO</b> </p>
                    </td>
                    <td
                      v-else-if="fieldsState[((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start][index].status"
                      style='background:yellow; border:solid 1.0pt black;font-size: small'>
                      <p style="cursor: pointer;margin: 0cm;"
                        @click="selected.dayWeek = daysWeek[campoS - 1]; selected.day = ((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start; selected.hour = hour; addCite('OCCUPIED')"
                        align=center><b style="padding-left: 7px; padding-right: 7px;">DETALLES</b> </p>
                    </td>
                    <td
                      v-else-if="(mySystem.year > state.year) || (state.year == mySystem.year && mySystem.month > state.month) || (state.year == mySystem.year && mySystem.month == state.month && (mySystem.day) >= ((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start)"
                      style='background:rgb(0, 174, 255);border:solid 1.0pt'>
                      <p style="cursor: not-allowed;margin: 0cm; font-size: small;" align=center>
                        <b>TERMINADO</b>
                      </p>
                    </td>
                    <td v-else style='background:#00B050;border:solid 1.0pt'>
                      <p style="cursor: pointer;margin: 0cm; font-size: small;" align=center
                        @click="selected.dayWeek = daysWeek[campoS - 1]; selected.day = ((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start; selected.hour = hour; addCite('AVAILABLE')">
                        <b>DISPONIBLE</b>
                      </p>

                    </td>
                  </tr>
                </table>
              </div>
              <div v-else>
                <table name="miniTabla"
                  v-show="(((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start) <= calendar[state.year][state.month - 1].days"
                  v-if="((colS - 1) * 7) + campoS >= calendar[state.year][state.month - 1].start" border=1 cellspacing=0
                  cellpadding=0 style=' border-collapse:collapse; margin: 2px; width: 98%'>
                  <tr v-for="hour, index in hours" :key="'hour:' + hour" :name="'hour:' + hour">
                    <td v-if="hour == '09:00 - 10:00'" rowspan=4
                      :style="mySystem.year == state.year && mySystem.month == state.month && ((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start == mySystem.day ? 'background-color: yellow' : ''">
                      <p align=center style='margin-bottom:0cm;text-align:center'>
                        {{ returnformatDay(((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start)
                        }}
                      </p>
                    </td>
                    <td>
                      <p style="margin: 0cm; font-size: small" align=center><b>{{ hour }}</b></p>
                    </td>
                    <td v-if="index == 3" style='background:rgb(0, 174, 255); border:solid 1.0pt'>
                      <p style="cursor: not-allowed;margin: 0cm;font-size: small;"
                        @click="selected.dayWeek = daysWeek[campoS - 1]; selected.day = ((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start; selected.hour = hour; addCite('PRIORITY')"
                        align=center><b>RESERVADO</b> </p>
                    </td>
                    <td
                      v-else-if="fieldsState[((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start][index].status && fieldsState[((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start][index].userId == $user.id"
                      style='background:yellow; border:solid 1.0pt'>
                      <p style="cursor: pointer;margin: 0cm; cursor: pointer;font-size: small;"
                        @click="selected.dayWeek = daysWeek[campoS - 1]; selected.day = ((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start; selected.hour = hour; addCite('RESERVED')"
                        align=center><b>RESERVADO</b> </p>
                    </td>
                    <td
                      v-else-if="fieldsState[((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start][index].status"
                      style='background:#C00000; border:solid 1.0pt black;color:white;font-size: small'>
                      <p style="cursor: not-allowed;margin: 0cm;"
                        @click="selected.dayWeek = daysWeek[campoS - 1]; selected.day = ((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start; selected.hour = hour; addCite('OCCUPIED')"
                        align=center><b style="padding-left: 7px; padding-right: 7px;">{{ 'OCUPADO' }}</b> </p>
                    </td>
                    <td
                      v-else-if="(mySystem.year > state.year) || (state.year == mySystem.year && mySystem.month > state.month) || (state.year == mySystem.year && mySystem.month == state.month && mySystem.day >= ((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start)"
                      style='background:rgb(0, 174, 255);border:solid 1.0pt'>
                      <p style="cursor: not-allowed;margin: 0cm; font-size: small;" align=center>
                        <b>TERMINADO</b>
                      </p>
                    </td>
                    <td v-else style='background:#00B050;border:solid 1.0pt'>
                      <p style="cursor: pointer;margin: 0cm; font-size: small;" align=center
                        @click="selected.dayWeek = daysWeek[campoS - 1]; selected.day = ((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start; selected.hour = hour; addCite('AVAILABLE')">
                        <b>DISPONIBLE</b>
                      </p>

                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
      </div>

    </center>
    <!-- VENTANA DE AJUSTES EN DIALOGO -->
    <v-dialog v-model="dialog" persistent width="600px">
      <v-card>
        <v-toolbar color="primary" dense>
          <v-toolbar-title>RESERVAR CITA</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn color="" outlined icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <center>
          <v-card-text style="cursor:default" class="py-2 font-weight-black">
            <h3 class="pa-3">{{ selected.dayWeek }} {{ selected.day }} DE {{ calendar[state.year][state.month - 1].month
            }}
              DE {{ state.year }} HORA: {{ selected.hour }}</h3>
          </v-card-text>
          <v-card class="mx-auto" flat max-width="90%">
            <table cellspacing=0 cellpadding=0 style='border-collapse:collapse'>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>FISCALÍA:</b></p>
                </td>
                <td style='padding:0cm'>
                  <v-text-field label="ESCRIBIR..." style="float: left; margin-bottom: -20px;" dense
                    v-model="formReserver.fiscalie" outlined></v-text-field>
                  <v-btn style="float: right;" color="" outlined icon @click="dialogData.fiscalie = true">
                    <v-icon>mdi-magnify</v-icon>
                    <!-- VENTANA DE ELEGIR FISCALIA -->
                    <v-dialog v-model="dialogData.fiscalie" persistent width="500px">
                      <v-card v-if="!dialogData.fiscalieNro" class="mx-auto">
                        <v-toolbar color="primary" dense width="100%">
                          <v-toolbar-title>LISTA DE FISCALIAS</v-toolbar-title>
                          <v-spacer></v-spacer>
                          <v-toolbar-items>
                            <v-btn color="" outlined icon @click="dialogData.fiscalie = false">
                              <v-icon>mdi-close</v-icon>
                            </v-btn>
                          </v-toolbar-items>
                        </v-toolbar>
                        <v-list>
                          <v-list-item v-for="(item, i) in fiscalies" :key="i" :value="item" color="primary" rounded="xl">
                            <v-list-item-title v-text="item">
                            </v-list-item-title>
                            <v-btn style="float: right;" color="" outlined icon
                              @click="fiscalieData.name = item; dialogData.fiscalieNro = true">
                              <v-icon>mdi-plus</v-icon>


                            </v-btn>

                          </v-list-item>
                        </v-list>
                      </v-card>
                      <!-- VENTANA DE ELEGIR NUMERO DE FISCALIA -->
                      <v-card v-else class="mx-auto">
                        <v-toolbar color="primary" dense width="100%">
                          <v-toolbar-title>NUMERO DE FISCALIA</v-toolbar-title>
                          <v-spacer></v-spacer>
                          <v-toolbar-items>
                            <v-btn color="" outlined icon @click="dialogData.fiscalieNro = false">
                              <v-icon>mdi-close</v-icon>
                            </v-btn>
                          </v-toolbar-items>
                        </v-toolbar>
                        <v-list>
                          <v-list-item v-for="(item, i) in 5" :key="'awwwwq' + i" :value="item" color="primary"
                            rounded="xl">
                            <v-list-item-title v-text="fiscalieData.name + ' ' + item">
                            </v-list-item-title>
                            <v-btn style="float: right;" color="" outlined icon
                              @click="formReserver.fiscalie = fiscalieData.name + ' ' + item; dialogData.fiscalieNro = false; dialogData.fiscalie = false;">
                              <v-icon>mdi-plus</v-icon>
                            </v-btn>

                          </v-list-item>
                        </v-list>
                      </v-card>
                    </v-dialog>
                  </v-btn>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>FISCAL:</b></p>
                </td>
                <td style='padding:0cm'>
                  <v-text-field label="ESCRIBIR..." style="float: left; margin-bottom: -20px;" dense
                    v-model="formReserver.fiscal" outlined></v-text-field>
                  <v-btn style="float: right;" color="" outlined icon @click="dialogData.fiscal = true">
                    <v-icon>mdi-magnify</v-icon>
                    <!-- VENTANA DE ELEGIR FISCAL -->
                    <v-dialog v-model="dialogData.fiscal" persistent width="500px">
                      <v-card class="mx-auto">
                        <v-toolbar color="primary" dense width="100%">
                          <v-toolbar-title>LISTA DE FISCALES</v-toolbar-title>
                          <v-spacer></v-spacer>
                          <v-toolbar-items>
                            <v-btn color="" outlined icon @click="dialogData.fiscal = false">
                              <v-icon>mdi-close</v-icon>
                            </v-btn>
                          </v-toolbar-items>
                        </v-toolbar>
                        <v-list>
                          <v-list-item v-for="(item, i) in fiscals" :key="i" :value="item" color="primary" rounded="xl">
                            <v-list-item-title v-text="item">
                            </v-list-item-title>
                            <v-btn style="float: right;" color="" outlined icon
                              @click="formReserver.fiscal = item; dialogData.fiscal = false">
                              <v-icon>mdi-plus</v-icon>
                            </v-btn>

                          </v-list-item>
                        </v-list>
                      </v-card>
                    </v-dialog>
                  </v-btn>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>ETAPA:</b></p>
                </td>
                <td style='padding:0cm'>
                  <v-text-field label="ESCRIBIR..." style="float: left; margin-bottom: -20px;" dense
                    v-model="formReserver.etap" outlined></v-text-field>
                  <v-btn style="float: right;" color="" outlined icon @click="dialogData.etap = true">
                    <v-icon>mdi-magnify</v-icon>
                    <!-- VENTANA DE ELEGIR ETAPA -->
                    <v-dialog v-model="dialogData.etap" persistent width="500px">
                      <v-card class="mx-auto">
                        <v-toolbar color="primary" dense width="100%">
                          <v-toolbar-title>LISTA DE PROCESOS</v-toolbar-title>
                          <v-spacer></v-spacer>
                          <v-toolbar-items>
                            <v-btn color="" outlined icon @click="dialogData.etap = false">
                              <v-icon>mdi-close</v-icon>
                            </v-btn>
                          </v-toolbar-items>
                        </v-toolbar>
                        <v-list>
                          <v-list-item v-for="(item, i) in etaps" :key="i" :value="item" color="primary" rounded="xl">
                            <v-list-item-title v-text="item">
                            </v-list-item-title>
                            <v-btn style="float: right;" color="" outlined icon
                              @click="formReserver.etap = item; dialogData.etap = false">
                              <v-icon>mdi-plus</v-icon>
                            </v-btn>

                          </v-list-item>
                        </v-list>
                      </v-card>
                    </v-dialog>
                  </v-btn>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>PRESUNTO DELITO:</b></p>
                </td>
                <td style='padding:0cm'>
                  <v-text-field label="ESCRIBIR..." style="float: left; margin-bottom: -20px;" dense
                    v-model="formReserver.delit" outlined></v-text-field>
                  <v-btn style="float: right;" color="" outlined icon @click="dialogData.delit = true">
                    <v-icon>mdi-magnify</v-icon>
                    <!-- VENTANA DE ELEGIR DELITO -->
                    <v-dialog v-model="dialogData.delit" persistent width="500px">
                      <v-card class="mx-auto">
                        <v-toolbar color="primary" dense width="100%">
                          <v-toolbar-title>LISTA DE DELITOS</v-toolbar-title>
                          <v-spacer></v-spacer>
                          <v-toolbar-items>
                            <v-btn color="" outlined icon @click="dialogData.delit = false">
                              <v-icon>mdi-close</v-icon>
                            </v-btn>
                          </v-toolbar-items>
                        </v-toolbar>
                        <v-list>
                          <v-list-item v-for="(item, i) in delits" :key="i" :value="item" color="primary" rounded="xl">
                            <v-list-item-title v-text="item">
                            </v-list-item-title>
                            <v-btn style="float: right;" color="" outlined icon
                              @click="formReserver.delit = item; dialogData.delit = false">
                              <v-icon>mdi-plus</v-icon>
                            </v-btn>

                          </v-list-item>
                        </v-list>
                      </v-card>
                    </v-dialog>
                  </v-btn>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>NÚMERO I.P/I.F:</b></p>
                </td>
                <td style='padding:0cm'>
                  <v-text-field label="ESCRIBIR..." style="margin-bottom: -20px;" dense v-model="formReserver.num"
                    outlined></v-text-field>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>NÚMERO OFICIO:</b></p>
                </td>
                <td style='padding:0cm'>
                  <v-text-field label="ESCRIBIR..." style="margin-bottom: -20px;" dense v-model="formReserver.nroOfice"
                    outlined></v-text-field>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>EVIDENCIA/INDICIO:</b></p>
                </td>
                <td style='padding:0cm'>
                  <v-text-field label="ESCRIBIR..." style="margin-bottom: -20px;" dense v-model="formReserver.evidence"
                    outlined></v-text-field>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>INFORMACIÓN ADICIONAL:</b></p>
                </td>
                <td style='padding:0cm'>
                  <v-textarea rows=3 label="ESCRIBIR..." no-resize style="margin-bottom: -20px; re font-size: 12px;" dense
                    v-model="formReserver.info" outlined></v-textarea>
                </td>
              </tr>
            </table>
            <v-card-text>
              <h1 class="pb-3" style="color:red">{{ sms }}</h1>
              <v-checkbox v-model="sure" label="ESTOY DE ACUERDO CON LA INFORMACIÓN INGRESADA."></v-checkbox>
              <v-btn :disabled="!sure" :loading="waiting" @click="save()" class="mb-4 pa-8" block color="green"
                size="x-large">
                <h2>GUARDAR</h2>
              </v-btn>
            </v-card-text>
          </v-card>
        </center>
      </v-card>
    </v-dialog>
    <!-- VENTANA DE AJUSTES EN DIALOGO SHOW -->
    <v-dialog v-model="dialogShow" persistent width="600px">
      <v-card>
        <v-toolbar color="primary" dense>
          <v-toolbar-title>CITA RESERVADA POR: {{ formShow.userId }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn color="" outlined icon @click="dialogShow = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <center>
          <v-card-text style="cursor:default" class="py-2 font-weight-black">
            <h3 class="pa-3">{{ selected.dayWeek }} {{ selected.day }} DE {{ calendar[state.year][state.month - 1].month
            }}
              DE {{ state.year }} HORA: {{ selected.hour }}</h3>
          </v-card-text>
          <v-card class="mx-auto" flat max-width="90%">
            <table cellspacing=0 cellpadding=0 style='border-collapse:collapse'>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>FISCALÍA:</b></p>
                </td>
                <td style='padding:0cm'>
                  <p style='margin-bottom:0cm;text-align:left'>
                    {{ formShow.fiscalie }}
                  </p>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>FISCAL:</b></p>
                </td>
                <td style='padding:0cm'>
                  <p style='margin-bottom:0cm;text-align:left'>
                    {{ (formShow.fiscal).toUpperCase() }}
                  </p>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>ETAPA:</b></p>
                </td>
                <td style='padding:0cm'>
                  <p style='margin-bottom:0cm;text-align:left'>
                    {{ formShow.etap }}
                  </p>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>NÚMERO I.P/I.F:</b></p>
                </td>
                <td style='padding:0cm'>
                  <p style='margin-bottom:0cm;text-align:left'>
                    {{ formShow.num }}
                  </p>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>NÚMERO OFICIO:</b></p>
                </td>
                <td style='padding:0cm'>
                  <p style='margin-bottom:0cm;text-align:left'>
                    {{ formShow.nroOfice }}
                  </p>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>PRESUNTO DELITO:</b></p>
                </td>
                <td style='padding:0cm'>
                  <p style='margin-bottom:0cm;text-align:left'>
                    {{ (formShow.delit).toUpperCase() }}
                  </p>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>EVIDENCIA/INDICIO:</b></p>
                </td>
                <td style='padding:0cm'>
                  <p style='margin-bottom:0cm;text-align:left'>
                    {{ formShow.evidence }}
                  </p>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>INFORMACIÓN:</b></p>
                </td>
                <td style='padding:0cm'>
                  <p style='margin-bottom:0cm;text-align:left'>
                    {{ formShow.info }}
                  </p>
                </td>
              </tr>
            </table>
            <br>
            <v-card-text v-if="($user.id).toUpperCase() == SUPERADMIN">
              <h1 class="pb-3" style="color:red">{{ sms }}</h1>
              <v-checkbox  v-model="sure" label="ELIMINAR CITA RESERVADA"></v-checkbox>
              <v-btn :disabled="!sure" :loading="waiting"
                @click="deleter(formShow.id)" class="mb-4 pa-8" block color="green" size="x-large">
                <h2>ELIMINAR</h2>
              </v-btn>
            </v-card-text>
          </v-card>
        </center>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import Loader from "@/components/System/Loader";
export default {
  name: "home",
  components: {
    Loader
  },
  data() {
    return {
      SUPERADMIN: "JCRIM",
      waitForData: true,
      logoJcrim: require("@/assets/default/imgJcrim.png"),
      waitingGetData: false,
      dialogData: { fiscalie: false, fiscalieNro: false, fiscal: false, etap: false, delit: false },
      cased: "",
      dialog: false,
      dialogShow: false,
      sure: false,
      waiting: false,
      sms: "",
      dayConter: 0,
      getdataSchedule: [{ usedDay: "", status: "" }],
      selected: { dayWeek: "", day: "", hour: "" },
      fieldsState: [],
      fiscalies: ["SOLUCIONES RÁPIDAS", "PERSONAS Y GARANTÍAS", "PATRIMONIO CIUDADANO", "VIOLENCIA DE GÉNERO", "ADMINISTRACIÓN PÚBLICA", "ADOLESCENTES INFRACTORES", "DELINCUENCIA ORGANIZADA, TRANSNACIONAL E INTERNACIONAL", "FLAGRANCIA", "MULTICOMPETENTE", "DELITOS ACUÁTICOS", "ACCIDENTES DE TRÁNSITO"],
      fiscals: ["Alexander Hernan Apolo Vivanco", "Andrea Lucia Mendez Quintanilla",
        "Bolivar Enrique Figueroa Arevalo", "Carlos Augusto Franco León",
        "Carlos Julio Vera Chavez", "Christian Kerlin Ayala Piedra",
        "Dalton Freddy Macas Lozano", "Dannys Kleber Campoverde Requelme",
        "Diana Sofia Sanchez Gutierrez", "Edgar Benigno Morocho Rosales",
        "Eduardo Fabian Marchant Guaman", "Gabriel Santiago Pereira Gomez",
        "Galo Francisco Torres Torres", "George Vicente Espinoza Loayza",
        "Guido Estuardo Coronel Nuñez", "Heidy León Santin",
        "Jaime Rodrigo Morocho Morocho", "Jamil Rodrigo Castro Solorzano",
        "Javier Ulises Tocto Palacios", "John Hernan Gonzalez Torres",
        "Johnny Patricio Gonzalez Galarza", "Jorge Luis Cuenca Rios",
        "Jorge Byron Mora Zumba", "Jose Sachez Gutierrez",
        "Juan Diego Garcia Amoroso", "Junot Francisco Minuche Cuesta",
        "Karla Katherine Zurita Chango", "Lady Esther Cuenca Hernandez",
        "Lenin Stalin Salinas Betancourt", "Lizardo Antonio Espinoza Bustamante",
        "Lucrecia Alexandra Espinoza Jaramillo", "Luis Alberto Caivinagua Uyaguari",
        "Manuel Lenin Espinoza Aviles", "Marcos Flores Calle",
        "Maria Elvira Carpio Erraez", "Maria de Lourdes Bustamante Acaro",
        "Maria Dolores Rodriguez Solorzano", "Maria Isabel Tenesaca Blacio",
        "Nancy Elizabeth Pesantez Marquez", "Orlando Efrain Palomeque Beltran",
        "Rene Vicente Ormaza Torres", "Paola Francisca Vivanco Murillo",
        "Paul Armando Iñiguez Apolo", "Ramiro Angel Carrion Bravo",
        "Romulo Tito Espinoza Torres", "Segundo Luis Cañafe Villa",
        "Sixto Cervilio Minga Sarango", "Vilma Elcira Gonzalez Cedillo",
        "Wilson Emiliano Cuenca Armijos"],
      fiscalieData: { name: "", num: "" },
      etaps: ['INVESTIGACIÓN PREVIA', 'INSTRUCCIÓN FISCAL', 'EXPEDIENTE FISCAL', 'ACTO ADMINISTRATIVO'],
      delits: ['ROBO', 'ASESINATO', 'EXTORSIÓN', 'INTIMIDACIÓN', 'TERRORISMO', 'ACOSO SEXUAL', 'ABUSO SEXUAL', 'VIOLACIÓN'],
      formReserver: { dateUsed: "", yearUsed: "", monthUsed: "", dayUsed: "", hourUsed: "", fiscalie: "", fiscal: "", nroOfice: "", etap: "", section: "pendiente", num: "", delit: "", evidence: "", info: "" },
      formShow: { dateUsed: "", yearUsed: "", monthUsed: "", dayUsed: "", hourUsed: "", fiscalie: "", fiscal: "", nroOfice: "", etap: "", section: "pendiente", num: "", delit: "", evidence: "", info: "" },
      appAccess: {
        name: "sz7crimUser",
        password: "qwAS123",
      },
      testx: [{ name: "aa" }, { name: "bb" }],
      testAlternate: true,
      testState: [{ dayUsed: 2, yearUsed: 2022 }, { dayUsed: 10, yearUsed: 2022 }, { dayUsed: 5, yearUsed: 2022 }, { dayUsed: 7, yearUsed: 2022 }],
      daysWeek: ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO"],
      state: { year: 2023, month: 11, day: 1, dayWeek: 5 },
      mySystem: { year: 2023, month: 11, day: 1 },
      stateLimitBack: { year: 2022, month: 1 },
      stateLimitNext: { year: 2024, month: 12 },

      hours: ["09:00 - 10:00", "11:00 - 12:00", "14:30 - 15:30", "16:00 - 17:00"],
      calendar:
      {
        "2022": [{ month: "ENERO", start: 7, days: 31 }, { month: "FEBRERO", start: 3, days: 28 }, { month: "MARZO", start: 3, days: 31 },
        { month: "ABRIL", start: 6, days: 30 }, { month: "MAYO", start: 1, days: 31 }, { month: "JUNIO", start: 4, days: 30 },
        { month: "JULIO", start: 6, days: 31 }, { month: "AGOSTO", start: 2, days: 31 }, { month: "SEPTIEMBRE", start: 5, days: 30 },
        { month: "OCTUBRE", start: 7, days: 31 }, { month: "NOVIEMBRE", start: 3, days: 30 }, { month: "DICIEMBRE", start: 5, days: 31 }],

        "2023": [{ month: "ENERO", start: 7, days: 31 }, { month: "FEBRERO", start: 3, days: 28 }, { month: "MARZO", start: 3, days: 31 },
        { month: "ABRIL", start: 6, days: 30 }, { month: "MAYO", start: 1, days: 31 }, { month: "JUNIO", start: 4, days: 30 },
        { month: "JULIO", start: 6, days: 31 }, { month: "AGOSTO", start: 2, days: 31 }, { month: "SEPTIEMBRE", start: 5, days: 30 },
        { month: "OCTUBRE", start: 7, days: 31 }, { month: "NOVIEMBRE", start: 3, days: 30 }, { month: "DICIEMBRE", start: 5, days: 31 }],
        "2024": [{ month: "ENERO", start: 1, days: 31 }, { month: "FEBRERO", start: 4, days: 29 }, { month: "MARZO", start: 5, days: 31 },
        { month: "ABRIL", start: 1, days: 30 }, { month: "MAYO", start: 3, days: 31 }, { month: "JUNIO", start: 6, days: 30 },
        { month: "JULIO", start: 1, days: 31 }, { month: "AGOSTO", start: 4, days: 31 }, { month: "SEPTIEMBRE", start: 7, days: 30 },
        { month: "OCTUBRE", start: 2, days: 31 }, { month: "NOVIEMBRE", start: 5, days: 30 }, { month: "DICIEMBRE", start: 7, days: 31 }]
      },
    };
  },
  mounted() {
    this.validUser()
    this.initValFieldStatus()
    const fecha = new Date();
    this.mySystem.year = fecha.getFullYear()
    this.mySystem.month = fecha.getMonth() + 1
    this.mySystem.day = fecha.getDate()
    this.state.year = fecha.getFullYear()
    this.state.month = fecha.getMonth() + 1
    this.state.day = fecha.getDate()
    this.state.dayWeek = fecha.getDay()
    this.get()
  },

  created() {
    this.$func.openDialog = this.openDialog;
    this.openDialog("news", { name: "dfdf" });

  },
  computed: {},
  methods: {
    tested() {
      alert("yess")
    },
    validUser() {
      if (this.$user.id == null) {
        this.$router.push({ name: "Inicio" })
      }
    },
    initValFieldStatus() {
      for (let index = 0; index < 50; index++) {
        this.fieldsState.push(
          [{ status: false, userId: null, data: {} }, { status: false, user: null, data: {} }, { status: false, user: null, data: {} }, { status: false, user: null, data: {} },],
        )
      }
    },
    Actioncomponents(aux, data) {
      switch (aux) {
        case "alert":
          this.$function["alertIni"](data.status, data.sms);
          break;
        default:
          break;
      }
    },
    returnformatDay(aux) {
      if (aux <= 9) {
        aux = "0" + aux
      }
      return aux
    },
    addCite(aux) {
      this.sure = false
      this.waiting = false
      switch (aux) {
        case "AVAILABLE":
          this.formReserver.fiscalie = ""
          this.formReserver.fiscal = ""
          this.formReserver.nroOfice = ""
          this.formReserver.etap = ""
          this.formReserver.section = ""
          this.formReserver.num = ""
          this.formReserver.delit = ""
          this.formReserver.evidence = ""
          this.formReserver.info = ""
          this.dialog = true
          break;
        case "RESERVED":
          var auxHour = this.formatHourIndex(this.selected.hour)
          if ((this.$user.id).toUpperCase() == this.SUPERADMIN || this.$user.id == this.fieldsState[this.selected.day][auxHour].userId) {
            this.formShow = this.fieldsState[this.selected.day][auxHour].data
            this.dialogShow = true
          }
          break;
        case "OCCUPIED":
          if ((this.$user.id).toUpperCase() == this.SUPERADMIN) {
            this.formShow = this.fieldsState[this.selected.day][this.formatHourIndex(this.selected.hour)].data
            this.dialogShow = true
          }
          break;
        default:
          break;
      }
    },
    save() {
      this.validUser()
      this.waiting = true;
      this.formReserver.userId = this.$user.id
      this.formReserver.dateUsed = this.selected.dayWeek + " " + this.selected.day + " DE " + this.calendar[this.state.year][this.state.month - 1].month + " DE " + this.state.year + " HORA: " + this.selected.hour
      this.formReserver.yearUsed = this.state.year
      this.formReserver.monthUsed = this.state.month
      this.formReserver.dayUsed = this.selected.day
      this.formReserver.hourUsed = this.selected.hour
      this.sms = ""
      this.$http({
        method: "POST",
        url: "/save",
        data: {
          req: this.formReserver,
          appAccess: this.appAccess
        },
      })
        .then((res) => {
          if (res.data) {
            this.showNotification(res.data.status)
          } else {
            this.$function.alertIni("error", "Error, Vuelva a intentar")
          }
        })
        .catch(() => { })
        .finally(() => {
          this.waiting = false;
        });
    },
    async get() {
      this.waitForData = true
      this.resetStatus()
      this.waiting = true
      this.sms = ""
      this.$http
        .get("/read/" + this.state.month + "/" + this.state.year)
        .then((res) => {
          if (res.data) {
            if (res.data.schedule) {
              this.setStatus(res.data.schedule)
              this.waiting = false
              this.dialog = false
            }
          } else {
            this.showNotification("error")

          }
        })
        .catch(() => {
          this.$function.alertIni("error", "Error. vuelva a intentar")
          this.waiting = false
        })
        .finally(() => {
          this.waitingGetData = false
        });
    },
    deleter(id) {
      this.sms = ""
      this.waiting = true;
      this.$http({
        method: "PUT",
        url: "/delete/" + id,
        data: {
          appAccess: this.appAccess
        },
      })
        .then((res) => {
          if (res.data.status == "deleted") {
            this.dialogShow = false
            this.get()
            this.showNotification(res.data.status)
          } else {
            this.$function.alertIni("error", "Error, Vuelva a intentar")
          }
        })
        .catch(() => { })
        .finally(() => {
          this.waiting = false;
        });
    },
    setStatus(auxData) {
      for (let index = 0; index < auxData.length; index++) {
        for (let index2 = 0; index2 < this.hours.length; index2++) {
          const hour = this.hours[index2];
          if (auxData[index].hourUsed == hour) {
            this.fieldsState[auxData[index].dayUsed][index2].userId = auxData[index].userId
            this.fieldsState[auxData[index].dayUsed][index2].status = true
            this.fieldsState[auxData[index].dayUsed][index2].data = auxData[index]
          }
        }
      }
      this.waitForData = false
    },
    resetStatus() {
      for (let index = 0; index < this.fieldsState.length; index++) {
        for (let index2 = 0; index2 < this.hours.length; index2++) {
          this.fieldsState[index][index2].user = null
          this.fieldsState[index][index2].status = false
          this.fieldsState[index][index2].data = {}
        }
      }
    },
    btnMonthBack() {
      if (this.state.month == 1) {
        this.state.year--
        this.state.month = 12
      } else {
        this.state.month--
      }
      this.get()
    },
    btnMonthNext() {
      if (this.state.month == 12) {
        this.state.year++
        this.state.month = 1
      } else {
        this.state.month++
      }
      this.get()
    },
    goTo(aux) {
      this.$router.push({ name: aux })
    },
    test(aux) {
      alert(aux.type)
    },
    contact() {
      window.open(this.url, "_blank");
    },
    close() {
      this.dialog.news = false;
    },
    openDialog(aux, data) {
      this.dialog.data = data;
      this.close();
      switch (aux) {
        case "news":
          this.dialog.title = "Noticias";
          this.dialog.news = true;
          break;
        case "business":
          this.dialog.title = "Negocios";
          this.dialog.business = true;
          break;
        case "login":
          this.dialog.title = "Ingresar / Iniciar Sesión";
          this.dialog.login = true;
          break;
        default:
          break;
      }
      this.dialog.active = true;
    },
    async createSetting() {
      this.$http({
        method: "POST",
        url: "/createsetting",
        data: {
          req: this.setting,
          appAccess: { name: "sz7crimSuperAdm", password: "aassleodffiIAs9" }
        },
      })
        .then((res) => {
          if (res.data) {
            this.showNotification(res.data.status)
          } else {
            this.$function.alertIni("error", "Error, Vuelva a intentar")
          }
        })
        .catch(() => { })
        .finally(() => {
          //  this.waiting = false;
        });
    },
    async getSetting() {
      this.sure = false
      this.waiting = true
      this.sms = ""
      this.appAccess.password = ""
      this.$http
        .get("/readsetting/" + this.appAccess.name)
        .then((res) => {
          if (res.data) {
            if (res.data.setting.gen) {
              this.createSetting()
            } else {
              this.setting.numDescargo = res.data.setting.numDescargo
              this.setting.numPericia = res.data.setting.numPericia
              this.setting.numAdmin = res.data.setting.numAdmin
              this.setting.numMemo = res.data.setting.numMemo
              this.setting.numTelegram = res.data.setting.numTelegram
              this.setting.numInform = res.data.setting.numInform
              this.setting.numOrdService = res.data.setting.numOrdService
              this.setting.numEvaluation = res.data.setting.numEvaluation
              this.setting.numResolution = res.data.setting.numResolution
              this.dialog = true
              this.waiting = false
            }
          } else {
            this.showNotification("error")

          }
        })
        .catch(() => {
          this.$function.alertIni("error", "Error. vuelva a intentar")
          this.waiting = false
        })
        .finally(() => { });
    },
    async updateSetting() {
      this.sure = false
      this.waiting = true
      this.$http({
        method: "PUT",
        url: "/updatesetting/sz7crimSuperAdm",
        data: {
          req: this.setting,
          appAccess: this.appAccess
        },
      })
        .then((res) => {
          if (res.data) {
            this.showNotification(res.data.status)
          } else {
            this.$function.alertIni("error", "Error, Vuelva a intentar")
          }
        })
        .catch(() => {
          this.$function.alertIni("error", "Error, contácte con administrador")
        })
        .finally(() => {
          //  this.waiting = false;
        });
    },
    showNotification(aux) {
      switch (aux) {
        case "created":
          this.$function.alertIni("success", "CITA RESERVADA")
          this.get()
          break;
        case "updated":
          this.sms = "INFORMACION GUARDADA CORRECTAMENTE"
          this.waiting = false
          break;
        case "password":
          this.sms = "CLAVE INCORRECTA"
          this.waiting = false
          break;
        case "empty":
          this.sms = "FALTAN CAMPOS POR LLENAR"
          this.waiting = false
          break;
        case "number":
          this.sms = "INGRESE SOLO NUMEROS"
          this.waiting = false
          break;
        case "fail":
          this.$function.alertIni("Error", "Error. vuelva a intentar")
          this.waiting = false
          break;
        case "error":
          this.$function.alertIni("error", "Error, contácte con administrador")
          this.waiting = false
          this.sure = false
          break;
        case "deleted":
          this.$function.alertIni("success", "CITA ELIMINADA")
          this.waiting = false
          this.sure = false
          break;
        default:
          break;
      }

    },
    formatHourIndex(aux) {
      for (let index = 0; index < this.hours.length; index++) {
        if (this.hours[index] == aux) {
          return index
        }
      }
    }

  }
}
</script>

<style scoped>
* {
  user-select: none
}

.tableMy {
  border-collapse: collapse;
}

.tdMy {
  border: solid windowtext 1.0pt;
}

.centerFull {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.textTitle {
  font-size: 30px;
}

.textSubtitle {
  font-size: 100px;
}

.View {
  width: 100%;
}

.col1 {
  background-color: rgba(255, 255, 255, 0.733);
  border-radius: 4%;
}

.col2 {
  background-color: rgba(255, 255, 255, 0.733);
  border-radius: 2%;
  left: 10px;
  position: relative;
}</style>
