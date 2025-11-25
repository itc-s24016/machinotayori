import styles from "../page.module.css";

export default function Page() {
    return (
        <main className={styles.container}>
            <article className={styles.post}>
                <h1 className={styles.heading}>予防接種に関する一般的注意</h1>
                <p>予防接種は、体調の良い時に受けることが大切です。</p>
                <p>接種前には健康状態を確認し、心配がある場合はかかりつけ医や保健相談センターに相談してください。</p>
                <br /><br />

                <section>
                    <h2 className={styles.bold}>予診票・持参物</h2>
                    <p>予診票は、健康状態をよく知る保護者や本人が記入し、母子健康手帳と一緒に持参してください。</p>
                    <p>健康状態に詳しい保護者が同伴することが望ましいです。</p>
                    <p>接種するワクチンの必要性や副反応についても事前に理解しておきましょう。</p>
                    <p>※母子健康手帳を紛失した場合は、接種証明書が必要です。</p>
                    <p>　<a href={""} className={styles.link}>健康増進課 予防係</a>（電話：098-xxx-xxxx）にお問い合わせください。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>接種できない場合</h2>
                    <ul>
                        <li>明らかに発熱している場合（体温37.5℃以上）</li>
                        <li>重篤な急性疾患にかかっている場合</li>
                        <li>ワクチンや成分でアナフィラキシーを起こしたことがある場合</li>
                        <li>妊娠中の生ワクチン（麻疹・風疹・水痘・おたふくかぜなど）</li>
                        <li>結核やケロイドなど特定の病状がある場合</li>
                        <li>ロタウイルスワクチンの接種が制限される基礎疾患がある場合</li>
                        <li>免疫不全症の方で生ワクチンを接種する場合</li>
                    </ul>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>接種に注意が必要な場合</h2>
                    <ul>
                        <li>1回目の接種後に発熱や腫れが生じた場合、2回目も同様の可能性があるため、かかりつけ医に相談してください。</li>
                        <li>熱性けいれんやてんかんの既往がある場合、発熱によってけいれんが起こる可能性があります。</li>
                        <li>アレルギー疾患がある場合でも、過去に激しい反応がなければ原則接種可能です。<br />詳細は医師に相談してください。</li>
                        <li>慢性疾患にかかっている場合でも、状態が安定していれば接種可能です。</li>
                    </ul>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>お問い合わせ先</h2>
                    <ul>
                        <li><a href={""} className={styles.link}>健康増進課 予防係</a>:098-xxx-xxxx</li>
                        <li>かかりつけ医（接種医）</li>
                    </ul>
                    <p>体調に不安がある場合や接種可否で迷う場合は、早めに相談してください。</p>
                </section>
            </article>
        </main>
    );
}
