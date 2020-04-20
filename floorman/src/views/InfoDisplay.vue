<template>
  <div id="info-display">
    <b-container>
      <br>
      <b-jumbotron header="Info">
        <b-container>
          <b-row>
            <b-col>
              <b-row>
                <h1>Chips</h1>
              </b-row>
              <b-row>
                <h1>15 x </h1>
              </b-row>
              <b-row>
                <h1>3 x </h1>
              </b-row>
              <b-row>
                <h1>2 x </h1>
              </b-row>
              <b-row>
                <h1>1 x </h1>
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                  <h1>Blinds</h1>
              </b-row>
              <b-row>
                <b-col>
                  <b-row>
                    <h1>1sb / 2bb</h1>
                  </b-row>
                  <b-row>
                    <h1>2sb / 4bb</h1>
                  </b-row>
                  <b-row>
                    <h1>4sb / 8bb</h1>
                  </b-row>
                  <b-row>
                    <h1>5sb / 10bb</h1>
                  </b-row>
                  <b-row>
                    <h1>Break</h1>
                  </b-row>
                </b-col>
                <b-col>
                  <b-row>
                    <h1>10sb / 20bb</h1>
                  </b-row>
                  <b-row>
                    <h1>20sb / 40bb</h1>
                  </b-row>
                  <b-row>
                    <h1>40sb / 80bb</h1>
                  </b-row>
                  <b-row>
                    <h1>50sb / 100bb</h1>
                  </b-row>
                  <b-row>
                    <h1>Break</h1>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
            </b-col>
            <b-col align-v="end">
              <b-button class="float-sm-right" pill variant="warning" href="/game">Next</b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class InfoDisplay extends Vue {
  
}
</script>

<style lang="scss">

</style>
