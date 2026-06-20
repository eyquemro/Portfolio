import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { motion } from 'framer-motion'

const COMMANDS: Record<string, string[]> = {
  help: [
    'Commandes disponibles :',
    '  whoami        — identité de l\'opérateur',
    '  ls -la        — contenu du répertoire courant',
    '  nmap -sV      — scan des services réseau',
    '  cat flag.txt  — fichier sensible',
    '  sudo su       — élévation de privilèges',
    '  clear         — vider le terminal',
    '  exit          — fermer la session',
  ],
  whoami: [
    'romain.eyquem',
    'uid=0(root) gid=0(root) groupes=0(root)',
    'Rôle       : Architecte Cybersécurité',
    'Clearance  : SECRET DÉFENSE',
    'Localisation: Bordeaux, FR',
  ],
  'ls -la': [
    'total 64',
    'drwxr-x--- 3 root root 4096 juin 20 2026 .',
    'drwxr-x--- 9 root root 4096 juin 20 2026 ..',
    '-rw------- 1 root root  512 juin 20 2026 .ssh/id_ed25519',
    '-rw-r--r-- 1 root root 1337 juin 20 2026 flag.txt',
    '-rwxr-xr-x 1 root root 8192 juin 20 2026 deploy_soc.sh',
    '-rw-r--r-- 1 root root 2048 juin 20 2026 wazuh_cluster.yml',
    '-rw------- 1 root root  256 juin 20 2026 ansible_vault.key',
    '-rw-r--r-- 1 root root  512 juin 20 2026 freeipa_config.ldif',
  ],
  'nmap -sv': [
    'Starting Nmap 7.94 ( https://nmap.org )',
    'Rapport de scan pour portfolio.eyquem.dev',
    '',
    'PORT      STATE  SERVICE    VERSION',
    '22/tcp    open   ssh        OpenSSH 9.3',
    '443/tcp   open   https      nginx 1.24',
    '636/tcp   open   ldaps      FreeIPA LDAP',
    '4444/tcp  open   kerberos   MIT Kerberos 5',
    '9200/tcp  open   wazuh      Wazuh Indexer 4.7',
    '55000/tcp open   wazuh-api  Wazuh Manager API',
    '',
    'Détection de service effectuée.',
  ],
  'cat flag.txt': [
    '╔════════════════════════════════════════════╗',
    '║  FLAG{r0m41n_3yqu3m_s0c_4rch1t3ct_2026}  ║',
    '╚════════════════════════════════════════════╝',
    '',
    'Félicitations — vous avez trouvé l\'easter egg.',
    'Recruteur curieux détecté.',
    'Contact disponible en bas de page.',
  ],
  'sudo su': [
    '[sudo] mot de passe pour visiteur :',
    'Tentative d\'authentification échouée.',
    'Permission refusée. Bien essayé.',
    'Cet incident a été journalisé. (non)',
  ],
  'nmap': ['usage : nmap -sV'],
  'ls': [
    'deploy_soc.sh  wazuh_cluster.yml  ansible_vault.key  flag.txt  freeipa_config.ldif',
  ],
  uname: ['Linux portfolio 6.5.0-soc-hardened #1 SMP PREEMPT x86_64 GNU/Linux'],
  'uname -a': ['Linux portfolio 6.5.0-soc-hardened #1 SMP PREEMPT x86_64 GNU/Linux'],
  pwd: ['/root'],
  date: [new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }) + ' CET'],
}

interface Line { type: 'input' | 'output'; content: string }

interface Props { onClose: () => void }

export function FakeTerminal({ onClose }: Props) {
  const [lines, setLines] = useState<Line[]>([
    { type: 'output', content: 'SSH-2.0-OpenSSH_9.3' },
    { type: 'output', content: 'Connexion établie — root@portfolio:~' },
    { type: 'output', content: 'Dernière connexion : ' + new Date().toLocaleString('fr-FR') },
    { type: 'output', content: '' },
    { type: 'output', content: 'Tapez "help" pour la liste des commandes.' },
    { type: 'output', content: '' },
  ])
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => { inputRef.current?.focus() }, [])
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [lines])

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    const newLines: Line[] = [{ type: 'input', content: `root@portfolio:~# ${raw}` }]

    if (cmd === 'clear') { setLines([]); setInput(''); return }
    if (cmd === 'exit') { onClose(); return }

    const response = COMMANDS[cmd]
    if (response) {
      response.forEach(l => newLines.push({ type: 'output', content: l }))
    } else if (cmd !== '') {
      newLines.push({ type: 'output', content: `bash: ${cmd}: commande introuvable` })
    }

    newLines.push({ type: 'output', content: '' })
    setLines(prev => [...prev, ...newLines])
    setInput('')
  }

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') run(input)
    if (e.key === 'Escape') onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9997] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.88)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 220, damping: 20 }}
        className="w-full max-w-2xl"
        style={{
          border: '1px solid #00ff41',
          boxShadow: '0 0 30px rgba(0,255,65,0.25)',
          background: '#020802',
          fontFamily: '"JetBrains Mono", monospace',
          borderRadius: '2px',
        }}
      >
        {/* Barre de titre */}
        <div
          className="flex items-center justify-between px-4 py-2"
          style={{ borderBottom: '1px solid #00401a', background: '#051005' }}
        >
          <div className="flex gap-2">
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
          </div>
          <span style={{ color: '#00882a', fontSize: '0.75rem' }}>root@portfolio:~ — bash</span>
          <button onClick={onClose} style={{ color: '#00882a', fontSize: '0.9rem', lineHeight: 1 }}>✕</button>
        </div>

        {/* Corps */}
        <div
          className="p-4 overflow-y-auto text-sm"
          style={{ height: '380px' }}
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line, i) => (
            <div
              key={i}
              style={{
                color: line.type === 'input' ? '#afffbf' : '#00cc33',
                marginBottom: '1px',
                whiteSpace: 'pre',
                lineHeight: '1.5',
              }}
            >
              {line.content}
            </div>
          ))}

          {/* Ligne de saisie */}
          <div className="flex items-center" style={{ color: '#afffbf' }}>
            <span style={{ marginRight: '8px', flexShrink: 0 }}>root@portfolio:~#</span>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#afffbf',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 'inherit',
                width: '100%',
                caretColor: '#00ff41',
              }}
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </motion.div>
    </motion.div>
  )
}
