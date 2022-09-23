function updatemap() {
    fetch("/data1.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.Lat
                longitude = element.Long_

                population=element.Population
                if (population>4000000){
                    color = "rgb(255,0,0)"
                }

                else{
                    color = `rgb("${population}",0,0)`
                }

                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude,latitude])
                    .addTo(map);
            });
        })
}

updatemap()