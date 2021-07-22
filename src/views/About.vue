<template>
  <div class="about">
    <div class="info">
      ID:
      <input v-model="id" placeholder="Your ID">
      Key:
      <input v-model="key" placeholder="Your Key">
      <button v-on:click="access">Access</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      key: ""
    }
  },
  methods: {
    access() {
      console.log(typeof this.id);
      if (this.id != "" && this.key != "") {
        console.log("setting!");
        this.setData();
      } else if (this.id != "") {
        console.log("getting!");
        this.getData();
      } else if (this.key != "") {
        console.log("resetting!");
        this.key = "";
      } else {
        console.log("failing!");
      }
    },
    setData() {
      fetch('https://data.dominik-rutter.workers.dev', {
        method: 'PUT',
        mode: 'cors',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json'
        },
        body: `{
          "Key" : "${this.id}",
          "Value" : "${this.key}"
        }`
      })
    },
    getData() {
      fetch('https://data.dominik-rutter.workers.dev', {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        headers: {
          'Content-Type' : 'text/plain',
          'Key' : `${this.id}`
        }
      })
        .then(response => response.text())
        .then(data => {
          this.key = data;
        });
    }
  }
}
</script>

<style scope>
.about {
  color: wheat;
  font-size: 28px;
}
</style>