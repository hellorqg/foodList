<template>
  <div>
    <h2 class="sub-header">FOOD List</h2>
    <router-link to="/addFood" class="btn btn-success">添加美食</router-link>
    <!-- <a class="btn btn-success" href="add.html">添加美食</a> -->
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>美食</th>
            <th>评价</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">  
            <td>{{ item.id }}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>

            <td>
              <router-link :to="`/editFood/${item.id}`">编辑</router-link> &nbsp;&nbsp;
              <a href="#" @click.prevent="delFood(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      list: [],

    };
  },

  methods: {
    //   get(){
    //       console.log(1)
    //   },
    getload() {
    this.$axios.get("/heroes").then(res => {
        //  不能用lconsole
        // console.log(res.data);
        this.list = res.data;
        // alert(JSON.stringify(res.data))
        // console.log(res) 
      });
    },

    // 删除
    delFood(id){
       if(confirm("are you sure delete?")){
            this.$axios.delete(`/heroes/${id}`).then(()=>{
                // console.log(1)
            this.getload()
        })
       }
    }

  },

  created() {
    this.getload();
    // this.get()
  }
};
</script>

<style>
</style>