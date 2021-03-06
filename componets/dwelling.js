Vue.component('dwelling-component',{
    template : 
    `
    <div>
        <v-card>
            <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2 original_blue_color--text">
                LIVING SPACE
            </h1>
            </v-card-title>

            <v-tabs
            v-model="tab"
            background-color="transparent"
            color="original_blue_color"
            grow
            >
                <v-tab  class="text-h6">
                    plan
                </v-tab>
                <v-tab  class="text-h6">
                    modelling
                </v-tab>
                <v-tab  class="text-h6">
                    ISO
                </v-tab>
                
            
                <v-tab-item>
                <v-row class="mt-9 mb-9">
                    <v-col cols="12" sm="6" v-for="item in plan" :key="item.name">
                    <v-hover v-slot="{ hover }">
                        <v-card
                        elevation="6"
                        outlined
                        class="pa-5"
                        :elevation="hover ? 12: 2"
                        >
                            <a :href="item.link" target="_blank" class="black--text">
                                <v-img :src="item.src"></v-img>
                                <v-card-title class="title"> {{ item.name }} </v-card-title>
                            </a>    
                        </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
                </v-tab-item>

                <v-tab-item>
                <v-row class="mt-9 mb-9">
                    <v-col cols="12" sm="6" v-for="item in modelling" :key="item.name">
                    <v-hover v-slot="{ hover }">
                        <v-card
                        elevation="6"
                        outlined
                        class="pa-5"
                        :elevation="hover ? 12: 2"
                        >
                        <a :href="item.link" target="_blank" class="black--text">
                            <v-img :src="item.src"></v-img>
                            <v-card-title class="title"> {{ item.name }} </v-card-title>
                        </a>
                        </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
                </v-tab-item>

                <v-tab-item >
                <v-row class="mt-9 mb-9">
                    <v-col cols="12" sm="6" v-for="item in ISO" :key="item.name">
                    <v-hover v-slot="{ hover }">
                        <v-card
                        elevation="6"
                        outlined
                        :elevation="hover ? 12: 2"
                        >
                            <a :href="item.link" target="_blank" class="black--text">
                                <v-img :src="item.src"></v-img>
                                </a>
                                </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
                </v-tab-item>
                
            </v-tabs>
        </v-card>
    </div>
    `,
    data : function() {
        return {
            tab: null,
            plan : [
                {
                    name :"?????????" ,
                    src : "./img/?????????/??????/21??? ????????? ?????????.PNG",
                    link : "./popup/livingP-popup.html",
                },
                {
                    name :"????????? ??????" ,
                    src : "./img/?????????/?????? ?????????/21??? ????????? ?????????.PNG",
                    link : "./popup/livingP-popup.html",
                },
                {
                    name :"?????????" ,
                    src : "./img/?????????/??????/21??? ????????? ?????????.PNG",
                    link : "./popup/livingP-popup.html",
                },
                {
                    name :"" ,
                    src : "",
                    link : "#",
                },
                {
                    name :"????????? A,B" ,
                    src : "./img/?????????/??????/21??? ????????? ?????????A,B.PNG",
                    link : "./popup/livingP-popup.html",
                },
                {
                    name :"????????? A,B ??????" ,
                    src : "./img/?????????/?????? ?????????/21??? ????????? ?????????A,B.PNG",
                    link : "./popup/livingP-popup.html",
                },
            ],
            modelling : [
                {
                    name :"?????????01" ,
                    src : "./img/?????????/?????????/????????? ?????????-01.PNG",
                    link : "./popup/livingR-popup.html",
                },
                {
                    name :"?????????02" ,
                    src : "./img/?????????/?????????/????????? ?????????-02.PNG",
                    link : "./popup/livingR-popup.html",
                },
                {
                    name :"?????????03" ,
                    src : "./img/?????????/?????????/????????? ?????????-03.PNG",
                    link : "./popup/livingR-popup.html",
                },
                {
                    name :"?????????04" ,
                    src : "./img/?????????/?????????/????????? ?????????-04.PNG",
                    link : "./popup/livingR-popup.html",
                },
                {
                    name :"?????????01" ,
                    src : "./img/?????????/?????????/?????????1.PNG",
                    link : "./popup/livingR-popup.html",
                },
                {
                    name :"?????????02" ,
                    src : "./img/?????????/?????????/?????????2.PNG",
                    link : "./popup/livingR-popup.html",
                },
                {
                    name :"?????????03" ,
                    src : "./img/?????????/?????????/?????????3.PNG",
                    link : "./popup/livingR-popup.html",
                },
                {
                    name :"?????????04" ,
                    src : "./img/?????????/?????????/?????????4.PNG",
                    link : "./popup/livingR-popup.html",
                },
            ],
            ISO : [
                {
                    name :"1" ,
                    src : "./img/?????????/?????????/21??? ????????? ISO-01.PNG",
                    link : "./popup/livingISO-popup.html",
                },
                {
                    name :"2" ,
                    src : "./img/?????????/?????????/21??? ????????? ISO-02.PNG",
                    link : "./popup/livingISO-popup.html",
                },
                {
                    name :"3" ,
                    src : "./img/?????????/?????????/21??? ????????? ISO-03.PNG",
                    link : "./popup/livingISO-popup.html",
                },
                {
                    name :"4" ,
                    src : "./img/?????????/?????????/21??? ????????? ISO-04.PNG",
                    link : "./popup/livingISO-popup.html",
                },
            ],
        }
    
        
    }
})