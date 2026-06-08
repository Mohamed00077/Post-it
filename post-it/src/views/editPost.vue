<template>
  <div class="Post">
    <h1>Modifier la Note</h1>
    <form @submit.prevent>
      <div class="form-container">
        <input v-model="form.title" type="text" placeholder="Titre" />
        <textarea v-model="form.content" placeholder="Contenu"></textarea>
        <div class="btn">
          <button type="button" @click="store.editPost(form)" class="rounded-4">Enregistrer</button>
          <button type="button" @click="store.editNote = false" class="rounded-4">Annuler</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue"
import { useNotesStore } from "@/stores/notes"

const store = useNotesStore()

const form = reactive({
  title: store.selectedNote.title,
  content: store.selectedNote.content[0]
})
</script>


<style scoped>
.Post {
  max-width: 500px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
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
}
.btn{
  display: flex;
  gap: 20px;
}

</style>

