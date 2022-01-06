const component = (function (){
    const Constructor = function (options){
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;

    }
          //agregamos los metodos al prototipo del constructor del componente
    
    //render UI
    Constructor.prototype.render = function (){
        const $el = d.querySelector(this.el);
        if(!$el) return;
        $el.innerHTML = this.template(this.data);
    }

        //Actualizar el state de forma reactiva
        Constructor.prototype.setState = function (obj){
            for(let key in obj){
                if(this.data.hasOwnProperty(key)){
                    this.data[key] = obj[key];
                }
            }
            console.log(this.data);
            this.render();
        }



     // obtenemos la copia inmutable del estado
     Constructor.prototype.getState = function (){
       return JSON.parse(JSON.stringify(this.data))
        }

    return Constructor;





})();