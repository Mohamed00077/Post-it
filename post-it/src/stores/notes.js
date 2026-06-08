import { defineStore } from 'pinia'

const API_URL = 'https://postit.zoul.dev/notes'

export const useNotesStore = defineStore('notes', {
  state: () => ({
    posts: [],
    showForm: false,
    selectedNote: null,
    loading: false,
    error: null,
    editNote: false
  }),

  getters: {
    hasNotes: (state) => state.posts.length > 0,
    totalNotes: (state) => state.posts.length
  },

  actions: {
    async fetchPosts() {
      this.loading = true
      this.error = null
      try {
        const res = await fetch(API_URL)
        const data = await res.json()
        this.posts = data.notes
      } catch (e) {
        this.error = 'Erreur lors du chargement des notes'
      } finally {
        this.loading = false
      }
    },

    async addPost(form) {
      if (!form.title || !form.content) return
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: form.title, content: [form.content] })
      })
      this.showForm = false
      await this.fetchPosts()
    },

    async deleteNote(id) {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      if (res.ok) {
        this.selectedNote = null
        await this.fetchPosts()
      }
    },

    async editPost(form) {
      const res = await fetch(`${API_URL}/${this.selectedNote._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: form.title, content: [form.content] })
      })
      if (res.ok) {
        this.editNote = false
        this.selectedNote = null
        await this.fetchPosts()
      }
    },

    selectNote(note) {
      this.selectedNote = note
    },

    edit() {
      this.editNote = true
    },

    closeForm() {
      this.showForm = false
      this.fetchPosts()
    }
  }
})
