<template>
  <v-data-table :items="items" :search="search" :headers="headers" disable-pagination hide-default-footer>
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
     <template
        v-slot:item.ct_17_36="{ item }"
      >
        <span :class="sensitivityClass(item.ct_17_36)">{{ (item.ct_17_36*100.).toFixed(2) }}%</span>
     </template>
     <template
        v-slot:item.ct_25_30="{ item }"
      >
        <span :class="sensitivityClass(item.ct_25_30)">{{ (item.ct_25_30*100.).toFixed(2) }}%</span>
     </template>
     <template
        v-slot:item.ct_gt_30="{ item }"
      >
        <span :class="sensitivityClass(item.ct_gt_30)">{{ (item.ct_gt_30*100.).toFixed(2) }}%</span>
     </template>
     <template
        v-slot:item.ct_lt_25="{ item }"
      >
        <span :class="sensitivityClass(item.ct_lt_25)">{{ (item.ct_lt_25*100.).toFixed(2) }}%</span>
     </template>
  </v-data-table>
</template>

<script>
export default {
  props: ['items'],
  methods: {
    sensitivityClass(val){
      if(!val) return'';
      else if(val<0.5) return "red--text text--lighten-3";
      else if(val>0.75) return "green--text text--lighten-3";
      else return '';
    }
  },
  data: () => ({
    search: '',
    headers: [
      {
        sortable: true,
        align: "start",
        value: "manufacturer",
        text: "Manufacturer",
      },
      {
        sortable: true,
        align: "start",
        value: "testName",
        text: "Test Name",
      },
        {
          sortable: true,
          align: "center",
          value: "ct_lt_25",
          text: "CT < 25",
        },
        {
          sortable: true,
          align: "center",
          value: "ct_25_30",
          text: "CT 25-30",
        },
      {
        sortable: true,
        align: "center",
        value: "ct_gt_30",
        text: "CT > 30",
      },
        {
          sortable: true,
          align: "center",
          value: "ct_17_36",
          text: "CT 17-36",
        },

    ]
  })
}
</script>

<style>

</style>
