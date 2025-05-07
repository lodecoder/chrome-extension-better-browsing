export default {
    ignoreDomains: [
        "localhost", // デバッグで邪魔になる
        /^192\.168\./, // デバッグで邪魔になる
        /^(medical-..o.e.a|disease-..e.i.).ion-/, // ii
        /\..e.a.a\.c.$/, // ii
        /.i.u.osp-e..o(-dev)?\.azure/ // ii
    ],
    ignoreUrls: [
    ],
    ignorePathnames: [
        /\.(?:png|jpe?g|bmp|webp|avif|pdf)$/
    ]
}
