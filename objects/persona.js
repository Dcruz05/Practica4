let persona = {
    nombre: 'David',
    apellido: 'Cruz',
    getName : function (){
        return `${this.nombre} ${this.apellido}`
    },
    domicilio : {
        calle : "Madero #144",
        coloinia : "Centro",
        cp : 28000,
        municipio : "Centtro" 
    },
    getDirection : function () {
        return `${this.domicilio.calle} - Colonia:${this.domicilio.coloinia} CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`
    }
}
module.exports = persona
