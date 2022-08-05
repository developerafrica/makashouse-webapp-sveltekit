<script>
    import HEAD from "../components/head.svelte";
    import INTRO from "../components/intro.svelte";
    import SECTIONONE from "../components/sectionone.svelte";
    import SECTIONTWO from "../components/sectiontwo.svelte";

    import { stores } from "../stores/stores"
    import { browser } from "$app/env";

    let intro = true, keyIntro = "introductionkey-MWS-V.1.1.1-BUTAO"
    
    if (browser) {

        intro = false       
        
        if (localStorage.getItem(keyIntro) != null) {
            let lsData = localStorage.getItem(keyIntro)
            intro = JSON.parse(lsData) 
            
        }
    }

    
    function skipEventFunction(){
        intro = !intro
        if (browser) {
            localStorage.setItem(keyIntro, JSON.stringify(intro))            
        }
    }
    
</script>
<HEAD />
<section class="index-container">
    <article class:remove={intro} class="introduction">
        <INTRO  on:skipEvent={skipEventFunction}/>
    </article>
    <div class="sects">
        <section class="section-one">
            <SECTIONONE />
        </section>
        <section class="section-two">
            <SECTIONTWO storesData={$stores.data}/>
        </section>
    </div>
    <footer>
        <div class="ft">
            <article class="aurthor">
                peter butao
            </article>
        </div>
    </footer>
</section>
<style lang="scss">
    .index-container{
        .sects{
            padding: 1rem;
        }
        footer{
            padding: 4rem 0;
            padding-bottom: 10rem;
            .ft{
                padding: 1rem;
            }
        }
    }
</style>

