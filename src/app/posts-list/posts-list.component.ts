import { Component, OnInit } from '@angular/core';
import { IPost } from '../post';
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

    paginaSelezionata: string = "tutti";
   

    arrayDiOggettiPosts: IPost[] = [];
    arrayDiOggettiPostsFilterTravel: IPost[] = [];
    arrayDiOggettiPostsFilterFood: IPost[] = [];
    arrayDiOggettiPostsFilterFashion: IPost[] = [];

    constructor(private postsService : PostsService) {

    };//! funzione CREATA constructor 



    ngOnInit(): void {
        this.arrayDiOggettiPosts = this.postsService.prenderePosts();
        


        
        let arrayDiOggettiPostsFilterViaggi = this.arrayDiOggettiPosts.filter((elementoIessimoOggetto) => {

            return (elementoIessimoOggetto.category == "travel");
        })
        this.arrayDiOggettiPostsFilterTravel = arrayDiOggettiPostsFilterViaggi;





        let arrayDiOggettiPostsFilterCucina = this.arrayDiOggettiPosts.filter((elementoIessimoOggetto) => {

            return (elementoIessimoOggetto.category == "food");
        })
        this.arrayDiOggettiPostsFilterFood = arrayDiOggettiPostsFilterCucina;





        let arrayDiOggettiPostsFilterModa = this.arrayDiOggettiPosts.filter((elementoIessimoOggetto) => {

            return (elementoIessimoOggetto.category == "fashion");
        })
        this.arrayDiOggettiPostsFilterFashion = arrayDiOggettiPostsFilterModa;


    };//! funzione CREATA ngOnInit


    paginaCambia(pagina: string) {

        this.paginaSelezionata = pagina;

    };//! funzione CREATA paginaCambia



};//! classe(componente) PostsListComponent
