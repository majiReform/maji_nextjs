const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

function urlMaker(path: string) {
    return baseUrl + path;
}

export {
    baseUrl,
    urlMaker
}
