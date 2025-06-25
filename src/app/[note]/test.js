let content=`
Hi there
![[California_Bay_Area_county_map_(zoom&color).svg.png|40]]
two
![[450px-Bayarea_map.png]]
`

let content2=content.replaceAll(
    /\!\[\[([^|]+?)(?:\|(\d+))?\]\]/g,
    (_, url, width)=>{
        return `<img src="/media/${url}"${ width ? ` width="${width}" ` : ' ' }/>`
    }
    // '<img src="/media/$1" width="$2" />'
)


console.log(content2);

