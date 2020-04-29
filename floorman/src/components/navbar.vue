<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-button @click="$router.go(-1)">
                        <template>
                            <b-icon icon="box-arrow-in-left"></b-icon>
                        </template>
                        Back
                    </b-button>
                </b-navbar-nav>

                <b-navbar-brand class="ml-auto" align-v="center" href="/">
                    <img :src="getImgUrl('floormanlogo_white.png')" height="60px" width="60px" >
                </b-navbar-brand>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-button v-b-modal.rules>
                        Rules and Info
                        <b-icon icon="book"></b-icon>
                    </b-button>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <b-modal id="rules" title="Rules and Info">
            <h2>Rules</h2>
        </b-modal>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class fmNav extends Vue{
    private getImgUrl(pic: String) {
        // This is super sketch.
        return require('../../public/assets/' + pic)
    }
}
</script>

<style scoped>
    b-navbar-brand{
        margin: auto;
    }
</style>