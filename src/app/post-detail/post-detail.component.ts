import { Component, Input } from '@angular/core';
import { IPost } from '../post';
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {

    @Input()
    elementoIessimoOggettoPostt?: IPost;

    constructor(private postsService: PostsService) {

    };//! funzione CREATA constructor


    aggiungiAPreferiti(elementoIessimoOggettoPosttt: IPost, buttoncompare: string) {
        // // ! trasformo i dati da interface "IPost" a interface "IPreferito"
        // let elementoIessimoOggettoPostTrasformato = {
        //     title:  elementoIessimoOggettoPosttt.title

        // };
        this.postsService.inserisciAPreferiti(elementoIessimoOggettoPosttt, buttoncompare);



    };//! funzione CREATA aggiungiAPreferiti



};//! classe(componente) PostDetailComponent
