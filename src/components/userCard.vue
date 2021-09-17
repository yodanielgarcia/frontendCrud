<template>
  <b-container>
    <b-row>
      <b-col
        style="margin: 0 auto; float: none;"
        cols="12"
        sm="4"
        class="my-1"
        v-for="user in paginatedItems"
        :key="user.id"
      >
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6" v-for="logo in user.logos" :key="logo">
              <b-card-img
                v-bind:src="logo"
                class="rounded-0"
                onerror="this.style.display='none'"
              ></b-card-img>
            </b-col>
            <b-col md="12">
              <b-card-body :title="user.abbreviation">
                <b-card-text>
                  Datos Del Usuario <br />
                  <b-link> Nombre: {{ user.nombre }}</b-link>
                  <p>Apellido: {{ user.apellido }}</p>
                  <p>Direccion: {{ user.direccion }}</p>
                  <p>Telefono: {{ user.telefono }}</p>
                  <p>Edad: {{ user.edad }}</p>
                  <p>Fecha de contratacion: {{ user.fechaContrato }}</p>
                  <p>Fecha de salida: {{ user.fechaSalida }}</p>
                </b-card-text>
                <div>
                  <b-button
                    pill
                    v-if="favView"
                    @click="deleteFav(teams.id)"
                    variant="danger"
                    >Delete</b-button
                  >
                </div>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          @change="onPageChanged"
          :total-rows="totalRows"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "UserCards",
  props: {
    userCard: { userPrint: Array, default: null },
    favView: Boolean,
  },
  data() {
    return {
      user: null,
      paginatedItems: null,
      perPage: 3,
      totalRows: null,
      currentPage: 1,
      coment: "",
    };
  },
  watch: {
    userCard: function() {
      (this.user = this.userCard),
        (this.paginatedItems = this.userCard),
        (this.totalRows = this.userCard.length),
        this.paginate(this.perPage, 0);
    },
  },
  computed: {
    pageCount() {
      let l = this.totalRows,
        s = this.perPage;
      return Math.floor(l / s);
    },
  },
  methods: {
    paginate(page_size, page_number) {
      let itemsToParse = this.user;
      this.paginatedItems = itemsToParse.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    },
  },
};
</script>
