<template>
  <userCard :userCard="userCard"></userCard>
</template>

<script>
import services from "@/services/index";
import userCard from "@/components/userCard.vue";
export default {
  name: "teamList",
  components: {
    userCard,
  },
  data() {
    return {
      userCard: null,
      img: "",
    };
  },
  mounted: function() {
    services
      .getRequest("http://localhost:3000/users/api/v1/readPerson/:idper")
      .then((value) => {
        let idTeam = this.$route.params.teamId;
        this.userCard = [value.find((team) => team.id === idTeam)];
      });
  },
};
</script>
