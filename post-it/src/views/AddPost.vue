
<template>
  <div class="Post">
    <h1>Nouvelle Note</h1>
    <div class="form-container">
      <form @submit.prevent>
      <input v-model="form.title" type="text" placeholder="Titre" />
      <textarea v-model="form.content" placeholder="Contenu"></textarea>
      <div class="btn">
      <button type="button"  @click="store.addPost(form)" class="rounded-4">Enregistrer</button>
      <button type="button"   @click="store.showForm = false" class="rounded-4">Annuler</button>
      </div>
 </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"
import { useNotesStore } from "@/stores/notes"

const store = useNotesStore()
const form = reactive({ title: "", content: "" })
</script>


<style scoped>
.Post {
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #032491;
  max-width: 70rem;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 30px auto;
  position: relative;
  left: 75px;
}

input, textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  width: 60rem;
}
input{
  height: 50px;
}
textarea {
  height: 270px;
  resize: none;
  margin-top: 30px;
  margin-bottom:20px;
}
.btn{
  display: flex;
  gap: 20px;
}

</style>


