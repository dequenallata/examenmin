<template>
    <div>
        <Header/>

            <div class="container izquierda">

                <button class="btn btn-primary" v-on:click="buscar()" >BUSCAR PELICULA</button>
                <br><br>
                <p>
                    <label for="title">Titulo</label>
                    <input
                    id="title"
                    v-model="title"
                    type="text"
                    name="title"
                    >
                </p>

                <p>
                    <label for="year">Año</label>
                    <input
                    id="year"
                    v-model="year"
                    type="number"
                    name="year"
                    min="0">
                </p>

                

                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">TITLE</th>
                        <th scope="col">YEAR</th>
                        <th scope="col">RATED</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="peliculas in ListaPeliculas" :key="peliculas.id" v-on:click="informacion(peliculas.id)">
                        <th scope="row">{{ peliculas.id}}</th>
                        <td>{{ peliculas.Title }}</td>
                        <td>{{ peliculas.Year }}</td>
                        <td>{{ peliculas.Rated }}</td>
                        <td>{{ peliculas.Director }}</td>
                        <td><input type="checkbox" id="checkbox" v-model="checked"></td>
                    </tr>
            
                </tbody>
                </table>

            </div>

        <Footer />
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"Buscar",
    data(){
        return {
            ListaPeliculas:null,
            pagina:1
        }
    },
    components:{
        Header,
        Footer
    },
    methods:{
            buscar(title, year){
                this.$router.get('http://www.omdbapi.com/?t='+title+'&y='+year);
            },
            informacion(){
                this.$router.get('http://www.omdbapi.com/?t='+id);
            }
    },
    mounted:function(){
        let direccion = "" + this.pagina;
        axios.get(direccion).then( data =>{
            this.ListaPeliculas = data.data;
        });
    }
}
</script>
<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>