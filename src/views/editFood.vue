<template>
  <div>
    <h2 class="sub-header">编辑美食</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">美食名称</label>
        <input
          v-model="formData.name"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="美食名称"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">评论</label>
        <input
          v-model="formData.gender"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="评论"
        />
      </div>

      <button type="submit" class="btn btn-success" @click.prevent ="editFoods">编辑</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        gender: " "
      }
    };
  },
  methods: {
    getFoods() {
        let id   = this.$route.params.foodid
      this.$axios.get(`/heroes/${id}`).then(res => {
        this.formData = res.data;
      });
    },

    editFoods() {
      this.$axios.put(`/heroes/${this.formData.id}`,this.formData).then(() => {
        // alert(res)
       this.$router.push("/foodlist")
      });
    }
  },
  created(){
      this.getFoods()
  }
};
</script>

<style>
</style>