

// for ENTIRE API
export const getApiInfo = () => {
    const apiUrl = `https://the-one-api.dev/v2/character`;

    return fetch(apiUrl, {
        method: "GET",
        headers: { Authorization: "Bearer wi7TL1OO-6Qi2UGU7mAF" },
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => console.error(err))

};

//for for character by id
export const getCharacterInfo = (id) => {
    const apiUrl = `https://the-one-api.dev/v2/character/${id}`;

    return fetch(apiUrl, {
        method: "GET",
        headers: { Authorization: "Bearer wi7TL1OO-6Qi2UGU7mAF" },
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => console.error(err))

};

/*
{
    "docs": [
        {
            "_id": "5cd99d4bde30eff6ebccfbbe",
            "height": "",
            "race": "Human",
            "gender": "Female",
            "birth": "",
            "spouse": "Belemir",
            "death": "",
            "realm": "",
            "hair": "",
            "name": "Adanel",
            "wikiUrl": "http://lotr.wikia.com//wiki/Adanel"
        }
    ],
    "total": 1,
    "limit": 1000,
    "offset": 0,
    "page": 1,
    "pages": 1
}

*/


/*

<shreddit-player autoplay-pref="true" play-out-of-viewport="true" poster="https://external-preview.redd.it/OT5nx-YMcZgOdLjBMa0sbTYgmd9hRc5yhDmfPK9dpgY.png?width=960&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;v=enabled&amp;s=5b55b5c2eb23f85593953f91d1ca22c39fcce5bb" preview="https://v.redd.it/di9nzf0yym471/DASH_96.mp4" show-autoplay-toggle="true" src="https://v.redd.it/di9nzf0yym471/HLSPlaylist.m3u8?a=1679678289%2CM2I3MDkzMGZiYzMxYTlmNjBjN2U4Mzg4Y2M3OWRkNDdjODFmMzYyN2E5ODk5YmVjMDM0ODMzOTgwNWRkMjUxNw%3D%3D&amp;v=1&amp;f=sd" ui="desktop"><source src="https://v.redd.it/di9nzf0yym471/HLSPlaylist.m3u8?a=1679678289%2CM2I3MDkzMGZiYzMxYTlmNjBjN2U4Mzg4Y2M3OWRkNDdjODFmMzYyN2E5ODk5YmVjMDM0ODMzOTgwNWRkMjUxNw%3D%3D&amp;v=1&amp;f=sd" type="application/vnd.apple.mpegURL"></shreddit-player>
*/