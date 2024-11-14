export default function CarteBnv({ header, title, text, image, bgCard, span, height,largeurImg }) {

    const getPram =  `flex flex-col md:flex-row ${bgCard || ""} gap-4 shadow-sm border border-slate-200 rounded-lg w-full p-6`

    const getPramImg =  `rounded-lg w-full ${largeurImg} ${height} overflow-hidden`;

    return (
        <div className={getPram}>
            <div className="w-full md:w-8/12">
                <div className="flex flex-row items-center gap-4 mb-5 text-slate-800">
                    {header}
                </div>
                {title}
                {text}
                {span}
            </div>
            <div className={getPramImg}>
                {image}
            </div>
        </div>

    )
}
