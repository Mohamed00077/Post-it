<template>
  <div class="detail">
    <button @click="store.selectedNote = null" class="rounded-4">Retour</button>
    <div class="note ">
      <h1 >{{ store.selectedNote.title }}</h1>
      <p>{{ store.selectedNote.content[0] }}</p>
    </div>

    <div class="btn">
      <button @click="store.deleteNote(store.selectedNote._id)" class="rounded-4">Supprimer</button>
      <button class="rounded-4" @click = "store.edit()">Modifier</button>
    </div>

  </div>
</template>

<script setup>
import { useNotesStore } from "@/stores/notes"

const store = useNotesStore()
</script>

<style scoped>
.detail {
  max-width: 900px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
}

.btn {
  display: flex;
  flex-direction: row;
  gap: 20px;
 border-radius: 30px;
}

.note {
  height: 450px;
  width: 60rem;
  background-color: #032491;
  color: white;
  border-radius: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
}
</style>
