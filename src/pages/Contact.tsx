import { useState, useRef, type FormEvent } from 'react';
import PageShell from '@/components/PageShell';
import SectionHeading from '@/components/SectionHeading';
import { Reveal } from '@/components/SplitText';
import { site, contact } from '@/data/siteData';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"/>
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z"/>
    </svg>
  );
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (data: Record<string, string>) => {
    const e: Record<string, string> = {};
    if (!data.name || data.name.trim().length < 2) e.name = 'Please enter your name.';
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Please enter a valid email.';
    if (!data.subject || data.subject.trim().length < 2) e.subject = 'Please enter a subject.';
    if (!data.message || data.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
    return e;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = formRef.current!;
    const fd = new FormData(form);
    const data: Record<string, string> = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      subject: String(fd.get('subject') || ''),
      message: String(fd.get('message') || ''),
    };

    // Honeypot — bot filled the hidden field
    if (fd.get('company')) { setStatus('success'); form.reset(); return; }

    const valErrors = validate(data);
    setErrors(valErrors);
    if (Object.keys(valErrors).length) return;

    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: contact.web3formsKey,
          ...data,
          from_name: `${site.name} Portfolio`,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const fieldCls = (name: string) =>
    `w-full rounded-xl border bg-surface/50 px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted/60 focus:border-accent ${
      errors[name] ? 'border-error' : 'border-border'
    }`;

  return (
    <PageShell>
      <div data-enter>
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's <span className="accent-text">Connect</span></>}
          subtitle="Have a project, opportunity, or just want to say hello? Send me a message."
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Info */}
        <div className="lg:col-span-1">
          <Reveal>
            <div className="glass rounded-2xl p-6">
              <h3 className="mb-4 font-display text-lg font-semibold">Get in Touch</h3>
              <div className="space-y-4 text-sm">
                <p className="flex items-center gap-3 text-muted">
                  <MapPin size={18} className="text-accent" /> {site.location}
                </p>
                {site.email && (
                  <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-muted transition-colors hover:text-accent">
                    <Mail size={18} className="text-accent" /> {site.email}
                  </a>
                )}
              </div>

              <div className="mt-6 flex gap-3">
                {site.github && (
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-colors hover:text-accent" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                )}
                {site.linkedin && (
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-colors hover:text-accent" aria-label="LinkedIn">
                    <LinkedinIcon />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success animate-fade-in">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Message Sent!</h3>
                  <p className="mt-2 text-muted">Thank you for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 rounded-xl border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
                  {/* Honeypot */}
                  <input type="text" name="company" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px] h-0 w-0 opacity-0" aria-hidden="true" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
                      <input id="name" name="name" type="text" className={fieldCls('name')} placeholder="Your name" />
                      {errors.name && <p className="mt-1 text-xs text-error">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
                      <input id="email" name="email" type="email" className={fieldCls('email')} placeholder="you@example.com" />
                      {errors.email && <p className="mt-1 text-xs text-error">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">Subject</label>
                    <input id="subject" name="subject" type="text" className={fieldCls('subject')} placeholder="What's this about?" />
                    {errors.subject && <p className="mt-1 text-xs text-error">{errors.subject}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
                    <textarea id="message" name="message" rows={5} className={fieldCls('message')} placeholder="Tell me more..." />
                    {errors.message && <p className="mt-1 text-xs text-error">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-xl border border-error/30 bg-error/10 p-3 text-sm text-error">
                      <AlertCircle size={16} /> Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl accent-gradient px-6 py-3 font-display text-sm font-medium text-white shadow-lg shadow-accent/30 transition-all hover:shadow-accent/50 disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending...</>
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </PageShell>
  );
}
