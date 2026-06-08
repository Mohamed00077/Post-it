 <template>

<!-- <div v-if="store.selectedNote">
  <NoteDetail :note="store.selectedNote" />
</div> -->

<div v-if="store.selectedNote && store.editNote">
  <EditPost />
</div>

<div v-else-if="store.selectedNote">
  <NoteDetail />
</div>

<div v-else-if="!store.showForm">
  <div class="container mt-5">


    <div class="d-flex justify-content-between align-items-center mb-5 pb-3 border-bottom">
      <h1 class="fw-bold text-dark m-0">Mes Post-it</h1>
      <button
        @click="store.showForm = true"  class="rounded-4">
        Ajouter une note
      </button>
    </div>


    <div class="row g-4" v-if="store.hasNotes">
      <div
        v-for="post in store.posts"
        :key="post._id"
        class="col-12 col-md-6 col-lg-4"
        @click="store.selectNote(post)">

        <div class="card h-100 border-0 shadow-lg text-white postit-card"
             style="background: linear-gradient(to right ,#2E2E82, #17177C, #032491); cursor: pointer; border-radius: 15px;">

          <div class="card-body p-4 text-center d-flex flex-column">
            <h2 class="card-title fw-bold text-uppercase tracking-wider border-bottom border-white border-opacity-25 pb-3">
              {{ post.title.slice(0, 30) }}...
            </h2>

            <p>
              {{ post.content[0].slice(0, 50) }}...
            </p>
          </div>
        </div>
      </div>
    </div>
     <div class="div_pagin">
            <ul class="ul_pagin">
                <li class="li_pagin">
                    <a class="link_pagin active link1" href="#">1</a>
                </li>
                <li class="li_pagin link2">
                    <a class="link_pagin " href="#">2</a>
                </li>
                <li class="li_pagin link3">
                    <a class="link_pagin " href="#">3</a>
                </li>
                <li class="li_pagin link4">
                    <a class="link_pagin " href="#">4</a>
                </li>
                <li class="li_pagin link5">
                    <a class="link_pagin " href="#">5</a>
                </li>
                <li class="li_pagin link6">
                    <a class="link_pagin " href="#">6</a>
                </li>
                <li class="li_pagin link7">
                    <a class="link_pagin " href="#">7</a>
                </li>
                <li class="li_pagin link8">
                    <a class="link_pagin " href="#">8</a>
                </li>
                <li class="li_pagin link9">
                    <a class="link_pagin " href="#">9</a>
                </li>
                <li class="li_pagin link10">
                    <a class="link_pagin " href="#">10</a>
                </li>
                <li class="li_pagin">
                    <a class="icndroit_pagin" href="#">></a>
                </li>
            </ul>
        </div>
  </div>
</div>


<div v-else>
  <AddPost />
</div>
</template>

<script setup>
import { onMounted } from "vue"
import { useNotesStore } from "@/stores/notes"
import AddPost from "./views/AddPost.vue"
import NoteDetail from "./views/NoteDetail.vue"
import EditPost from "./views/editPost.vue"

const store = useNotesStore()

onMounted(store.fetchPosts)
</script>
















