<template>
  <div class="main">
    <h2>this is my main view page</h2>
    <MyCard
      :students="students"
      :isActive="isActive"
      @updateActive="changeActive"
    />
    <MyCard
      :students="students"
      :isActive="isActive"
      @updateActive="changeActive"
    />
    <!-- ex1 -->
    <!-- <slot-component :name="name">
      <p>This is some content for the slot!</p>
    </slot-component> -->
    <!-- ex2 -->
    <!-- <slot-component :name="name"> -->
    <!-- <template v-slot:title>
        <h3 style="color: red">This is a custom title</h3>
      </template>
      <template v-slot:paragraph>
        <p>This is a custom paragraph content.</p>
      </template> -->
    <!-- <template #title>
        <h3 style="color: red">This is a custom title</h3>
      </template>
      <template #paragraph>
        <p>This is a custom paragraph content.</p>
      </template>
    </slot-component> -->
    <!-- ex3 -->

    <KeepAlive>
      <slot-component :name="name" v-if="!isComponentTwoVisible">
        <template #slot-header>
          <h3 style="color: red">This is a slot header one</h3>
        </template>
        <template #slot-inputs>
          <input type="text" placeholder="Enter your name" />
        </template>
        <template #slot-actions>
          <button type="submit">Submit</button>
        </template>
      </slot-component>
    </KeepAlive>
    <KeepAlive>
      <slot-component :name="name" v-if="isComponentTwoVisible">
        <template #slot-header>
          <h3 style="color: gainsboro">This is a slot header two</h3>
        </template>
        <template #slot-inputs>
          <input type="text" placeholder="Enter your name" />
        </template>
        <template #slot-actions>
          <button type="submit">Submit</button>
        </template>
      </slot-component>
    </KeepAlive>
    <button @click="isComponentTwoVisible = !isComponentTwoVisible">
      Toggle Component
    </button>
  </div>
</template>

<script>
import MyCard from "@/components/MyCard.vue";
import SlotComponent from "@/components/SlotComponent.vue";
export default {
  name: "MainView",
  data() {
    return {
      // Reference Data type is Array or object
      // Primitive Data type is boolean or number or string
      students: [
        {
          id: 1,
          img: require("@/assets/boy.jpg"),
          name: "Alice Johnson",
          age: 22,
          department: "Computer Science",
        },
        {
          id: 2,
          img: require("@/assets/boy.jpg"),
          name: "Bob Smith",
          age: 24,
          department: "Mathematics",
        },
        {
          id: 3,
          img: require("@/assets/girl.jpg"),
          name: "Charlie Brown",
          age: 21,
          department: "Physics",
        },
      ],
      isActive: true,
      name: "dera",
      isComponentTwoVisible: false,
    };
  },
  components: {
    MyCard,
    SlotComponent,
  },
  methods: {
    changeActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
