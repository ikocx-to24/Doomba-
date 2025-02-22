<script>
    import "../app.css"
</script>

<div>
    <h1 class="flex justify-center text-4xl">
        Other Products by M en M inc.(onvenience)
    </h1>
    <div class="image-container">
        <img src="beerFetcher.png" alt="beer" class="fixed-size-image" />
        <img src="stink-brush.png" alt="toothbrush" class="fixed-size-image" />
        <!-- Add more images as needed -->
    </div>
    <div class="text-container">
        <p class="text-3xl">
            Beer Fetcher
        </p>
        <p class="text-3xl">
            Stink Brush
        </p>
    </div>
</div>

<style>
    .image-container {
        display: flex;
        flex-wrap: wrap;
        gap: 100px;
        justify-content: center;
        align-items: center;

    }

    .text-container {
        display: flex;
        flex-wrap: wrap;
        gap: 180px;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }

    .fixed-size-image {
        width: 300px;
        /* Fixed width */
        height: 300px;
        /* Fixed height */
        object-fit: cover;
    }

    div:has(.image-container){
        background: linear-gradient(to right, rgb(27, 231, 27), rgb(255, 0, 0));
    }
</style>