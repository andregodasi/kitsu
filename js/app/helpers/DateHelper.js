class DateHelper {
    
    constructor() {
        
        throw new Error('this class not instance');
    }
    
    static dataParaTexto(data) {
        
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
    
    static textoParaData(texto) {
        
        if(!/\d{2}\/\d{2}\/\d{4}/.test(texto)) 
            throw new Error('format dd/mm/aaaa');
             
        return new Date(...texto.split('/').reverse().map((item, index) => item - index % 2));
    }
}