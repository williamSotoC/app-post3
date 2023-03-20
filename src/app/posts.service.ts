import { Injectable } from '@angular/core';
import { IPost } from './post';
import { POSTS } from './posts-dati';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    // ! il servizio PostsService avrà come BASE il nome di variabile "arrayDiOggettiPreferitiPosts"
    // ! "arrayDiOggettiPreferitiPosts" esso mi servirà per mettere a schermo i dati

    bottoneCompare: string = "sparisceButton";

    arrayDiOggettiPreferitiPosts: IPost[] = [];

    constructor() { }

    prenderePosts(): IPost[] {

        return POSTS;

    };//! funzione CREATA prenderePosts


    inserisciAPreferiti(elementoIessimoOggettoPost: IPost,  buttoncompare: string) {

        // this.arrayDiOggettiPreferitiPosts.push(elementoIessimoOggettoPost);

        let elementoIessimoOggettoPostFind = this.arrayDiOggettiPreferitiPosts.find((elementoIessimoOggetto) => {

            return (elementoIessimoOggetto.id == elementoIessimoOggettoPost.id);

        })

        // ! se e solo se il valore di nome di proprieta "id" è UNIVOCO , allora PUSHA quel "elementoIessimoOggettoPost" passato come parametro
        // ! UNIVOCO vuoledire che "find()" mi ritorna undefined
        // ! UNIVOCO vuoledire che la condizione scritta a destra di return è false
        if (elementoIessimoOggettoPostFind == undefined) {
            this.arrayDiOggettiPreferitiPosts.push(elementoIessimoOggettoPost);


        }

        this.bottoneCompare = buttoncompare;


    };//! funzione CREATA inserisciAPreferiti


    rimuoviPostPreferito(elementoIessimoOggettoPreferitiPost: IPost) {

        // *opzione1
        let indiceElementoIessimoOggettoPreferitiPost = this.arrayDiOggettiPreferitiPosts.indexOf(elementoIessimoOggettoPreferitiPost);

        if (indiceElementoIessimoOggettoPreferitiPost > -1) {
            this.arrayDiOggettiPreferitiPosts.splice(indiceElementoIessimoOggettoPreferitiPost, 1);

        }
        // *opzione1
        // *opzione2 uso la libreria lodash.ATENZIONE DEVO IMPORTARLO IN ALTO, PER CUI SCRIVO: import * as _ from 'lodash'; altrimenti non funziona
        // _.remove(this.arrayDiOggettiPreferitiPosts, elementoIessimoOggettoPreferitiPost);
        // ! il nome di metodo deve iniziare SEMPRE con    " _.nomeMetodo()".Devo andare nel sito web di lodash per sapere qualli sono i nomi dei metodi e per sapere cosa fanno quei metodi
        // !esso mi serve per rimuovere un elemento dal mio array.A sinistra si scrive l'array e a destra invece si scrive l'elemento che voglio rimuovere da tale array
        // *opzione2

        if( this.arrayDiOggettiPreferitiPosts.length == 0) {
            this.bottoneCompare = "sparisceButton";
            
        }





    };//! funzione CREATA rimuoviPostPreferito


    eliminaTuttoPreferiti(bottoneSparice: string) {

        this.arrayDiOggettiPreferitiPosts = [];
        this.bottoneCompare = bottoneSparice;
       



    };//! funzione CREATA svuotaTuttoPreferiti



};//! servizio PostsService
