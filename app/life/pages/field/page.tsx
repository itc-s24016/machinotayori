import styles from "../../page.module.css";

export default function Page() {
return (
<main className={styles.container}>
    <article className={styles.post}>
        <h1 className={styles.heading}>収穫後の田畑管理</h1>
        <p>収穫後の田畑管理について以下の点にご注意ください。</p>
        <br></br><br></br>

        <section>
            <h2 className={styles.bold}>水源管理について</h2>
            <p>用水路や井戸などの水源は定期的に点検を行い、堆積物や落ち葉の除去を行ってください。</p>
        </section>
        <br></br>

        <section>
            <h2 className={styles.bold}>更新、申請、新規申請事項</h2>
            <p>農地の利用や管理に関する各種申請（農業用水の使用許可、農地転用、補助金申請など）は、</p>
            <p>期限内に必要書類を提出してください。</p>
            <p>申請期限が近づいています。</p>
            <p>特に新規申請は、必要書類を整えて早めに手続きを行ってください。</p>
            <p>詳細は市町村の農業振興課までご相談ください。</p>
        </section>
        <br></br>

        <section>
            <h2 className={styles.bold}>作物被害について</h2>
            <p>最近の調査では、害虫の発生や獣害が確認されています。</p>
            <p>早期発見のために定期的な観察を行ってください。</p>
            <p>被害を早期に発見した場合は、適切な農薬散布や防除ネットの設置を行ってください。</p>
            <p>発生した場合は農業相談窓口までご連絡ください。</p>
            <p>病害虫対策や防護柵の設置方法についても相談可能です。</p>
        </section>
        <br></br>

        <section>
            <h2 className={styles.bold}>共同整備のご協力</h2>
            <p>用水路や農道の共同整備は、地域全体の作業効率や安全確保につながります。</p>
            <p>地域の農業協同組合の連絡網に沿ってご参加ください。</p>
            <p>また、歩道に干渉している草木の伐採を心がけるようお願いいたします。</p>
        </section>
        <br></br>

        <section>
            <h2 className={styles.bold}>販売について</h2>
            <p>収穫後の作物販売は直売所や農業協同組合、販売イベントを活用してください。</p>
            <p>販売情報や手続き、規格、注意点については農業振興課で案内していますので、必要に応じてご確認ください。</p>
            <br></br>
            <p><a href={"#"} className={styles.link}>農業振興課</a>: 098-xxx-xxxx </p>

        </section>
        <br></br><br></br><br></br>
    </article>
</main>
);
}
