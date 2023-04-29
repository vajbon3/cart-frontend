<template>
  <LayoutComponent>
      <div class="flex flex-col w-full justify-center items-center">
          <vs-table :data="cart" class="w-1/2 my-2 border-gray-200 border" hoverFlat>
              <template #thead>
                  <th class="text-center">
                      Sku
                  </th>
                  <th class="text-center">
                      Name
                  </th>
                  <th class="text-center">
                      Price
                  </th>
              </template>

              <template v-slot="{data}">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data" class="border-y border-b-gray-200">
                      <vs-td key="column-1" :data="data[indextr].sku">
                          {{data[indextr].sku}}
                      </vs-td>

                      <vs-td key="column-2" :data="data[indextr].name">
                          {{data[indextr].name}}
                      </vs-td>

                      <vs-td key="column-3" :data="data[indextr].price">
                          {{data[indextr].price}}
                      </vs-td>
                  </vs-tr>
              </template>
          </vs-table>
      </div>
  </LayoutComponent>
</template>

<script>
import LayoutComponent from "@/components/LayoutComponent.vue";
import api from "@/services/api";

export default {
    name: "CartView",
    components: {LayoutComponent},
    data() {
        return {
            cart: [],
        }
    },
    mounted() {
        this.fetchCart();
    },
    methods: {
        fetchCart() {
            // loading spinner
            this.$vs.loading({});
            api.get('/cart')
                .then(response => {
                    // populate state
                    this.cart = response.data.cart;
                    // stop the loading spinner
                    this.$vs.loading.close();
                })
        }
    },
}
</script>

<style scoped>

</style>