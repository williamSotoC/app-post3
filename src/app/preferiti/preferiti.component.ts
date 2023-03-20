import { Component } from '@angular/core';
import { IPost } from '../post';
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-preferiti',
    templateUrl: './preferiti.component.html',
    styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent {

   


    constructor(public postsService: PostsService) {
        // ! rendo public il nome di parametro "postsService"(istanza della classe "PostsService") in questo modo tale nome di parametro sara VISIBILE nel suo rispettivo file "html"


    };//! funzione CREATA constructor


    eliminaPostPreferito(elementoIessimoOggettoPreferitiPostt: IPost) {
        this.postsService.rimuoviPostPreferito(elementoIessimoOggettoPreferitiPostt);


    };//!funzione CREATA eliminaPostPreferito


    svuotaTuttoPreferiti(bottoneSparice: string) {
        this.postsService.eliminaTuttoPreferiti(bottoneSparice);

       
        


    };//! funzione CREATA svuotaTuttoPreferiti







};//! classe(componente) PreferitiComponent
