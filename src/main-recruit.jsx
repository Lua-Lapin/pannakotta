import './index.css'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SectionHeader from './components/SectionHeader'

const inputClass = "bg-pc-bg border border-pc-border px-[14px] py-[10px] font-sans text-[13px] text-pc-text outline-none w-full focus:border-pc-accent"

function Field({ label, required, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] tracking-[2px] text-pc-text-muted uppercase">
        {label}
        {required && <span className="text-pc-accent ml-1 text-[10px]">*</span>}
      </span>
      {children}
    </label>
  )
}

function RecruitPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Nav />
      <main>
        <div className="px-12 pt-16 pb-12 bg-pc-bg border-b border-pc-border text-center max-sm:px-5 max-sm:pt-12 max-sm:pb-10">
          <SectionHeader label="Recruit" title="新人募集" as="h1" />
          <p className="text-[13px] text-pc-text-body leading-[2.2] max-w-[440px] mx-auto">
            あなたの個性が、ぱんなこったをもっと豊かにする。<br />
            配信経験は問いません。ジャンルも問いません。<br />
            「やってみたい」という気持ちだけ持って、<br />
            ここに飛び込んできてください。
          </p>
        </div>

        <div className="px-12 py-14 bg-pc-bg-sub max-sm:px-5 max-sm:py-12">
          <div className="max-w-[560px] mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Field label="ハンドルネーム" required>
                  <input type="text" name="name" placeholder="例：ぱんだ太郎" required className={inputClass} />
                </Field>

                <Field label="年齢" required>
                  <input type="number" name="age" placeholder="例：22" min="13" max="99" required className={inputClass} />
                </Field>

                <hr className="border-none border-t border-dashed border-pc-border my-1" />

                <Field label="連絡先メール" required>
                  <input type="email" name="email" placeholder="example@email.com" required className={inputClass} />
                </Field>

                <Field label="SNS URL">
                  <input type="url" name="sns" placeholder="https://x.com/yourname" className={inputClass} />
                </Field>

                <Field label="サンプル動画・配信URL">
                  <input type="url" name="sample" placeholder="https://youtube.com/..." className={inputClass} />
                </Field>

                <hr className="border-none border-t border-dashed border-pc-border my-1" />

                <Field label="活動実績・自己PR" required>
                  <textarea name="pr" placeholder="これまでの活動や、やりたいことを自由に書いてください。" required className={`${inputClass} resize-y min-h-[100px]`} />
                </Field>

                <Field label="その他・メッセージ">
                  <textarea name="message" placeholder="質問や伝えたいことがあればどうぞ。" className={`${inputClass} resize-y min-h-[100px]`} />
                </Field>

                <button
                  type="submit"
                  className="block w-full bg-pc-accent text-white py-3 px-10 font-serif text-[11px] tracking-[3px] uppercase border-none cursor-pointer mt-2 hover:opacity-85 transition-opacity"
                >
                  応募する — Apply
                </button>
              </form>
            ) : (
              <div className="text-center py-12 px-5">
                <p className="font-serif text-[22px] italic text-pc-text mb-3">ありがとうございます</p>
                <p className="text-[13px] text-pc-text-body leading-[2.2] mb-5">
                  応募ありがとうございます。<br />
                  ３営業日以内にご連絡差し上げます。
                </p>
                <p className="text-[11px] text-pc-text-muted">嘘ですけど</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(<RecruitPage />)
