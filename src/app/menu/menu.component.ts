import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    coloreSfondoBottone: string = "blue";

    @Output()
    impulsoOnCambiaPagina = new EventEmitter<string>();
    
    
    
    
    cambiaPagina(pagina: string) {
        this.impulsoOnCambiaPagina.emit(pagina);


        
        if (pagina == "tutti") {
            this.coloreSfondoBottone = "blue";
            
        }else if (pagina == "viaggi") {
            this.coloreSfondoBottone = "green";

        }else if (pagina == "cucina") {
            this.coloreSfondoBottone = "yellow";
            
        }else if (pagina == "moda") {
            this.coloreSfondoBottone = "red";

        }

    };//! funzione CREATA cambiaPagina




};// ! classe(componente) MenuComponent
