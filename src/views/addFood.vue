<template>
  <div >
        <h2 class="sub-header">添加美食</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">美食名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="exampleInputEmail1" placeholder="美食名称">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">评论</label>
            <input v-model="formData.gender" type="text" class="form-control" id="exampleInputPassword1" placeholder="评论">
          </div>
         
          <button type="submit" class="btn btn-success" @click.prevent="addFoods">添加</button>
        </form>
      </div>
</template>

<script>
export default {
    data(){
        return {
            formData:{
                name:"",
                gender:""
            }

        }
    },
    methods:{
        addFoods(){
            if(this.formData.name&&this.formData.gender){
                this.$axios.post("/heroes", this.formData).then(()=>{
                // alert(res.data)
                this.$router.push("/foodlist")
                
            })
            }else{
                alert("不能为空")
            }
        }


    }
}
</script>

<style>

</style>