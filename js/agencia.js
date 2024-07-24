export default class Cl_agencia {
    constructor() {
        this.contSuscriptores=0;
        this.contSuscripNoPagaron =0;
        this.contPlanA=0;
        this.contPlanB=0;
        this.contPlanC=0;
    }

    procesarSuscriptores(s){
        this.contSuscriptores++;
        if (s.tipoPlan=="C"){ 
            this.contSuscripNoPagaron++;
        }
        if (s.tipoPlan=="A"){
            this.contPlanA++;
        }
        if (s.tipoPlan=="B"){
            this.contPlanB++;
        }
        if (s.tipoPlan=="C"){
            this.contPlanC++;
        }       
    }

    planFavorito(){
        if (this.contPlanA>this.contPlanB && this.contPlanA>this.contPlanC){
            return "A";
        }
        else if (this.contPlanB>this.contPlanA && this.contPlanB>this.contPlanC){
            return "B";
        }
        else if (this.contPlanC>this.contPlanA && this.contPlanC>this.contPlanB){
            return "C";
        }
        else if (this.contPlanA==this.contPlanB && this.contPlanA==this.contPlanC){
            return "TODOS SON FAVORITOS";
        }
        else if (this.contPlanA===this.contPlanB && this.contPlanA>this.contPlanC){
                return "A Y B SON FAVORITOS";
        }
        else if (this.contPlanB===this.contPlanC && this.contPlanB>this.contPlanA){
            return "B Y C SON FAVORITOS";
        }
        else if (this.contPlanC===this.contPlanA && this.contPlanC>this.contPlanB){
            return "A Y C SON FAVORITOS";
        }
    }
    porcSuscriptoresNoPagaron(){
        return ((this.contSuscripNoPagaron/this.contSuscriptores)*100).toFixed(2);
    }
 }