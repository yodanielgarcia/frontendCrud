<template>
  <userCard :userCard="userCard"></userCard>
</template>

<script>
import services from "@/services/index";
import userCard from "@/components/userCard";
export default {
  name: "createUser",
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
      .getRequest("http://localhost:3000/users/api/v1/readPerson/")
      .then((value) => {
        this.userCard = value;
      });
  },
};
</script>
