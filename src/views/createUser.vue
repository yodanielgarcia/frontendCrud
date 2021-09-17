<template>
  <b-container cols="*">
    <b-row style="margin-top: 15%">
      <b-col>
        <label for="example-datepicker">nombre</label>
        <b-form-input v-model="nombre" placeholder="nombre"></b-form-input>
      </b-col>
      <b-col>
        <label for="example-datepicker">Apellido</label>
        <b-form-input v-model="apellido" placeholder="Apellido"></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <label for="example-datepicker">direccion</label>
        <b-form-input
          v-model="direccion"
          placeholder="direccion"
        ></b-form-input>
      </b-col>
      <b-col>
        <label for="example-datepicker">telefono</label>
        <b-form-input v-model="telefono" placeholder="telefono"></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <label for="example-datepicker">edad</label>
        <b-form-input v-model="edad" placeholder="edad"></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <label for="example-datepicker">fecha de contratacion</label>
        <b-form-datepicker
          id="example-datepicker"
          v-model="fechaContrato"
          class="mb-2"
        ></b-form-datepicker>
      </b-col>
      <b-col>
        <label for="example-datepicker">fecha de salida</label>
        <b-form-datepicker
          id="example-datepickerww"
          v-model="fechaSalida"
          class="mb-2"
        ></b-form-datepicker>
      </b-col>
    </b-row>
    <b-button variant="success" v-on:click="createUser">Crear</b-button>
  </b-container>
</template>

<script>
import userCard from "@/components/userCard";
import axios from "axios";
export default {
  name: "createUser",
  components: {
    userCard,
  },
  data() {
    return {
      nombre: null,
      apellido: null,
      direccion: null,
      telefono: null,
      edad: null,
      fechaContrato: null,
      fechaSalida: null,
    };
  },
  methods: {
    createUser() {
      let data = {
        nombre: this.nombre,
        apellido: this.apellido,
        direccion: this.direccion,
        telefono: this.telefono,
        edad: this.edad,
        fechaContrato: this.fechaContrato,
        fechaSalida: this.fechaSalida,
      };
      console.log("llege", data);
      let config = {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNTY2MjQ4MTYwfQ.X5xYZpssydFjt3ZPsN41Q-RENfbtYBbqjPK0GW3mqQQ",
          auth: "ADMIN",
        },
      };
      return axios
        .post("http://localhost:3000/users/api/v1/createPerson", data, config)
        .then((response) => {
          this.nombre = null;
          this.apellido = null;
          this.direccion = null;
          this.telefono = null;
          this.edad = null;
          this.fechaContrato = null;
          this.fechaSalida = null;
          return response.data;
        })
        .catch((e) => {
          // Capturamos los errores
        });
    },
  },
};
</script>
