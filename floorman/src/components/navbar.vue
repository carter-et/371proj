<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-button>
                        <template>
                            <b-icon icon="box-arrow-in-left"></b-icon>
                        </template>
                        Go Back
                    </b-button>
                </b-navbar-nav>

                <b-navbar-brand class="ml-auto" align-v="center" href="/">
                    Floorman
                </b-navbar-brand>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-button>
                        Rules and Info
                        <template>
                            <b-icon icon="book"></b-icon>
                        </template>
                    </b-button>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class fmNav extends Vue{
    
}
</script>

<style scoped>
    b-navbar-brand{
        margin: auto;
    }
</style>