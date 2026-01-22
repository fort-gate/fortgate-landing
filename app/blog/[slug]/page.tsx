import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import NewsletterForm from '@/components/NewsletterForm'

// Datos del artículo - en producción esto vendría de una base de datos o CMS
const articleData: { [key: string]: any } = {
  'exchange-hacks-are-not-inevitable': {
    title: 'Exchange Hacks Are Not Inevitable: Rethinking Security as Infrastructure',
    subtitle: 'Over the past decade, crypto exchanges have become critical gateways to the digital asset economy. They concentrate liquidity, onboard millions of users, and serve as bridges between traditional finance and decentralized systems.',
    category: 'COMPLIANCE STRATEGY',
    image: '/images/blog2.jpg',
    author: {
      name: 'Sarah Joners',
      date: 'Oct 24, 2023',
      readTime: '5 min read',
      avatar: '/images/placeholder-avatar.png'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Over the past decade, crypto exchanges have become critical gateways to the digital asset economy. They concentrate liquidity, onboard millions of users, and serve as bridges between traditional finance and decentralized systems. Yet, they remain one of the most frequent targets for large-scale cyberattacks.'
      },
      {
        type: 'paragraph',
        text: 'While headlines often frame exchange hacks as isolated security failures, the reality is more systemic. These incidents are rarely caused by a single bug or breach. Instead, they reflect deeper structural weaknesses in how security, custody, and compliance are designed and operated.'
      },
      {
        type: 'heading',
        text: 'The Anatomy of an Exchange Hack'
      },
      {
        type: 'paragraph',
        text: 'Most major exchange compromises follow a familiar pattern: attackers exploit centralized points of failure. Hot wallets with excessive permissions, weak internal access controls, compromised private keys, or insufficient transaction monitoring create opportunities for illicit actors to move funds quickly and at scale.'
      },
      {
        type: 'paragraph',
        text: 'What makes these attacks particularly damaging is not just the initial breach, but the speed at which stolen assets can be laundered through cross-chain bridges, mixers, or decentralized protocols. Once funds leave the exchange environment, recovery becomes exponentially more difficult.'
      },
      {
        type: 'heading',
        text: 'Why Traditional Security Models Fall Short'
      },
      {
        type: 'paragraph',
        text: 'Many exchanges still rely on security paradigms inherited from Web2: perimeter-based defenses, reactive incident response, and siloed monitoring tools. In a permissionless, composable financial system, this approach is no longer sufficient.'
      },
      {
        type: 'paragraph',
        text: 'Crypto infrastructure operates 24/7, across multiple chains, jurisdictions, and counterparties. Threats are not only external; insider risk, misconfigured smart contracts, and flawed operational processes can be just as dangerous. Security can no longer be treated as a layer added at the end—it must be embedded into the core architecture.'
      },
      {
        type: 'heading',
        text: 'Prevention Over Reaction'
      },
      {
        type: 'paragraph',
        text: 'The most effective defense against exchange hacks is early detection and proactive risk management. This includes:'
      },
      {
        type: 'list',
        items: [
          'Granular transaction monitoring to identify anomalous behavior before funds are irreversibly moved',
          'Strong wallet segmentation, reducing exposure by limiting hot wallet balances',
          'Clear governance and access controls, ensuring no single point of human failure',
          'Continuous risk assessment, rather than periodic audits',
          'Clear incident playbooks, designed for blockchain-native threats'
        ]
      },
      {
        type: 'paragraph',
        text: 'Importantly, prevention is not only a technical challenge but an organizational one. Teams must align product, security, compliance, and operations around shared risk assumptions.'
      },
      {
        type: 'heading',
        text: 'Compliance as a Security Primitive'
      },
      {
        type: 'paragraph',
        text: 'Contrary to popular belief, compliance does not have to be at odds with innovation or user privacy. When implemented thoughtfully, AML and risk analytics can act as early warning systems—flagging suspicious flows, identifying exposure to sanctioned entities, and helping exchanges respond before damage escalates.'
      },
      {
        type: 'paragraph',
        text: 'The future lies in more advanced approaches, such as cryptographic proofs, on-chain reputation systems, and privacy-preserving compliance mechanisms that allow platforms to demonstrate integrity without over-collecting user data.'
      },
      {
        type: 'heading',
        text: 'Toward More Resilient Crypto Infrastructure'
      },
      {
        type: 'paragraph',
        text: 'Exchange hacks are not an unavoidable cost of building in crypto. They are signals that current systems must evolve. As the industry matures and integrates more deeply with global financial markets, resilience, transparency, and accountability will become non-negotiable.'
      },
      {
        type: 'paragraph',
        text: 'Security is no longer just about protecting assets—it is about protecting trust. And trust, in crypto, is infrastructure.'
      }
    ],
    keyTakeaways: [
      'Regulatory scrutiny on DeFi protocols is intensifying across the EU and US.',
      'Smart contract-based KYC/AML solutions are emerging as a privacy-preserving middle ground.',
      'Institutional adoption hinges on the ability to prove clean transaction history.'
    ],
    codeSnippet: `def analyze_wallet_risk(address):
    """
    Analyzes wallet transaction history and sanctions lists
    to calculate a comprehensive risk score.
    """
    tx_history = get_transaction_history(address)
    sanctions_check = check_sanctions_lists(address)
    risk_score = calculate_risk(tx_history, sanctions_check)
    return risk_score`
  },
  'kyt-vs-kyc': {
    title: 'KYC vs KYT: Understanding the Difference in Crypto',
    subtitle: 'As crypto adoption accelerates, regulatory conversations often default to one familiar acronym: KYC. While Know Your Customer remains an important compliance requirement, it is no longer sufficient on its own.',
    category: 'INSIGHT',
    image: '/images/blog0.jpg',
    author: {
      name: 'Jane Doe',
      date: 'Nov 22, 2023',
      readTime: '8 min read',
      avatar: '/images/placeholder-avatar.png'
    },
    content: [
      {
        type: 'paragraph',
        text: 'As crypto adoption accelerates, regulatory conversations often default to one familiar acronym: KYC. While Know Your Customer remains an important compliance requirement, it is no longer sufficient on its own. In a blockchain-native financial system, understanding transaction behavior is just as critical as identifying users. This is where KYT comes into play.'
      },
      {
        type: 'paragraph',
        text: 'KYC and KYT are often mentioned together, but they solve fundamentally different problems. Confusing them can lead to weak compliance strategies, poor user experience, and blind spots in risk management.'
      },
      {
        type: 'heading',
        text: 'What KYC Actually Does'
      },
      {
        type: 'paragraph',
        text: 'KYC focuses on identity verification. Its goal is to answer a simple question: Who is the user?'
      },
      {
        type: 'paragraph',
        text: 'Through document checks, biometric verification, and personal information collection, KYC helps institutions establish that a person or entity exists and matches a given identity. In traditional finance, this model works because accounts and transactions are tightly linked to centralized intermediaries.'
      },
      {
        type: 'paragraph',
        text: 'In crypto, however, identity alone tells only part of the story.'
      },
      {
        type: 'paragraph',
        text: 'A verified user can still interact with sanctioned wallets, receive funds from illicit sources, or unknowingly participate in high-risk transaction flows. KYC confirms who is behind an account—but not what the money is doing.'
      },
      {
        type: 'heading',
        text: 'What KYT Brings to the Table'
      },
      {
        type: 'paragraph',
        text: 'KYT, or Know Your Transaction, focuses on behavior and fund flows. Instead of asking who the user is, KYT asks: Where are the funds coming from, where are they going, and what risks do they carry?'
      },
      {
        type: 'paragraph',
        text: 'By analyzing on-chain activity, KYT systems can:'
      },
      {
        type: 'list',
        items: [
          'Detect exposure to sanctioned or high-risk entities',
          'Identify patterns linked to hacks, scams, or laundering techniques',
          'Monitor transactions in real time or near real time',
          'Assign risk scores based on fund provenance and behavior'
        ]
      },
      {
        type: 'paragraph',
        text: 'KYT is blockchain-native by design. It leverages the transparency of public ledgers to continuously assess risk, even after onboarding is complete.'
      },
      {
        type: 'heading',
        text: 'Why KYC Alone Is Not Enough in Crypto'
      },
      {
        type: 'paragraph',
        text: 'Crypto operates without borders, banking hours, or centralized control. Funds can move across chains in seconds, often without interacting with regulated intermediaries.'
      },
      {
        type: 'paragraph',
        text: 'In this environment, relying solely on KYC creates a false sense of security. Once a user passes onboarding, traditional systems tend to reduce scrutiny—precisely when continuous monitoring is most needed.'
      },
      {
        type: 'paragraph',
        text: 'KYT fills this gap by providing ongoing oversight, ensuring that compliance does not stop at the door but evolves with transaction activity.'
      },
      {
        type: 'heading',
        text: 'KYC and KYT Are Complementary, Not Competing'
      },
      {
        type: 'paragraph',
        text: 'The most resilient crypto platforms do not choose between KYC and KYT—they combine them.'
      },
      {
        type: 'paragraph',
        text: 'KYC establishes accountability at entry points such as exchanges, wallets, or fiat on-ramps. KYT provides continuous risk assessment throughout the lifecycle of funds. Together, they form a more complete compliance and security framework.'
      },
      {
        type: 'paragraph',
        text: 'This layered approach allows platforms to:'
      },
      {
        type: 'list',
        items: [
          'Reduce exposure to illicit flows',
          'React faster to emerging threats',
          'Minimize unnecessary friction for low-risk users',
          'Strengthen trust with regulators and partners'
        ]
      },
      {
        type: 'heading',
        text: 'The Future: From Identity to Integrity'
      },
      {
        type: 'paragraph',
        text: 'As the industry matures, compliance is shifting from static identity checks to dynamic, behavior-based systems. Emerging models explore on-chain reputation, risk credentials, and privacy-preserving proofs that demonstrate transaction integrity without revealing personal data.'
      },
      {
        type: 'paragraph',
        text: 'In crypto, trust is not built solely on who a user claims to be—but on how value moves through the system.'
      },
      {
        type: 'paragraph',
        text: 'Understanding the difference between KYC and KYT is not just a regulatory exercise. It is a foundational step toward building safer, more scalable, and more credible crypto infrastructure.'
      }
    ],
    keyTakeaways: [
      'KYC verifies identity, while KYT monitors transaction behavior and fund flows.',
      'Crypto platforms need both KYC and KYT for comprehensive compliance.',
      'KYT provides continuous risk assessment beyond initial onboarding.',
      'The future of compliance combines identity verification with behavior-based monitoring.'
    ],
    codeSnippet: `function analyzeTransaction(transaction) {
  // KYT: Analyze transaction behavior
  const sourceRisk = checkSourceWallet(transaction.from);
  const destinationRisk = checkDestinationWallet(transaction.to);
  const patternRisk = detectSuspiciousPattern(transaction);
  
  return calculateRiskScore(sourceRisk, destinationRisk, patternRisk);
}`
  },
  'navigating-crypto-regulation': {
    title: 'Navigating the Shifting Sands of Crypto Regulation',
    subtitle: 'Discover the latest AML directives and how Fortgate\'s infrastructure helps you stay compliant without compromising user experience.',
    category: 'COMPLIANCE',
    image: '/images/blog3.jpg',
    author: {
      name: 'Jane Doe',
      date: 'Oct 24, 2023',
      readTime: '6 min read',
      avatar: '/images/placeholder-avatar.png'
    },
    content: [
      {
        type: 'paragraph',
        text: 'The regulatory landscape for cryptocurrency is evolving at an unprecedented pace. What was once a largely unregulated space is now subject to increasing scrutiny from governments and financial authorities worldwide. For protocols and institutions operating in this space, staying compliant is no longer optional—it is essential for survival and growth.'
      },
      {
        type: 'paragraph',
        text: 'Understanding and adapting to these changes requires more than just awareness. It demands infrastructure that can evolve alongside regulations while maintaining the core benefits that make crypto valuable: speed, transparency, and accessibility.'
      },
      {
        type: 'heading',
        text: 'The Current Regulatory Landscape'
      },
      {
        type: 'paragraph',
        text: 'From the EU\'s Markets in Crypto-Assets (MiCA) regulation to the evolving guidance from the SEC and CFTC in the United States, regulatory frameworks are taking shape across major jurisdictions. These regulations aim to protect consumers, prevent financial crimes, and bring legitimacy to the crypto ecosystem.'
      },
      {
        type: 'paragraph',
        text: 'Key areas of focus include Anti-Money Laundering (AML) requirements, Know Your Customer (KYC) procedures, transaction monitoring, and reporting obligations. Protocols that fail to address these requirements risk exclusion from major markets and potential legal consequences.'
      },
      {
        type: 'heading',
        text: 'Challenges for DeFi Protocols'
      },
      {
        type: 'paragraph',
        text: 'Decentralized protocols face unique challenges in meeting regulatory requirements. The permissionless nature of DeFi, while a core strength, can conflict with traditional compliance approaches that rely on centralized control and identity verification.'
      },
      {
        type: 'list',
        items: [
          'Balancing decentralization with compliance requirements',
          'Implementing KYC/AML without compromising user privacy',
          'Managing cross-border regulatory differences',
          'Adapting to rapidly changing rules without constant protocol updates'
        ]
      },
      {
        type: 'heading',
        text: 'How Fortgate Addresses These Challenges'
      },
      {
        type: 'paragraph',
        text: 'Fortgate\'s infrastructure is designed to bridge the gap between decentralization and compliance. By operating at the protocol level, Fortgate enables real-time transaction screening without requiring changes to user experience or protocol architecture.'
      },
      {
        type: 'paragraph',
        text: 'Our approach focuses on transaction behavior rather than identity alone. This allows protocols to meet AML requirements while preserving the privacy and accessibility that users expect from DeFi.'
      },
      {
        type: 'heading',
        text: 'Looking Ahead'
      },
      {
        type: 'paragraph',
        text: 'As regulations continue to evolve, the protocols that thrive will be those that treat compliance as a feature, not a burden. By building with compliance in mind from the start, projects can position themselves for long-term success and institutional adoption.'
      },
      {
        type: 'paragraph',
        text: 'The future of crypto regulation is not about choosing between innovation and compliance. It is about finding intelligent solutions that enable both.'
      }
    ],
    keyTakeaways: [
      'Crypto regulations are rapidly evolving across major jurisdictions including EU (MiCA) and US.',
      'DeFi protocols face unique challenges in meeting compliance requirements while maintaining decentralization.',
      'Transaction-based compliance (KYT) offers a privacy-preserving alternative to traditional KYC approaches.',
      'Protocols that embrace compliance as a feature will be better positioned for institutional adoption.'
    ],
    codeSnippet: `async function checkCompliance(transaction) {
  const riskScore = await analyzeTransaction(transaction);
  const sanctionsCheck = await checkSanctionsList(transaction.addresses);
  
  return {
    approved: riskScore < THRESHOLD && !sanctionsCheck.flagged,
    riskLevel: riskScore,
    details: sanctionsCheck
  };
}`
  },
  'real-time-threat-detection': {
    title: 'The Rise of Real-Time Threat Detection in DeFi',
    subtitle: 'Illicit fund flows are faster than ever. We break down how real-time analysis is the only way to protect your protocol and its users.',
    category: 'SECURITY',
    image: '/images/blog4.jpg',
    author: {
      name: 'John Smith',
      date: 'Oct 18, 2023',
      readTime: '8 min read',
      avatar: '/images/placeholder-avatar.png'
    },
    content: [
      {
        type: 'paragraph',
        text: 'The speed of blockchain transactions is both a feature and a vulnerability. In traditional finance, suspicious transactions can be flagged and reviewed over hours or days. In DeFi, funds can move through multiple protocols and across chains in seconds, making post-hoc detection nearly useless.'
      },
      {
        type: 'paragraph',
        text: 'This reality has given rise to a new paradigm in security: real-time threat detection. The question is no longer whether to monitor transactions, but how to do so at the speed of the blockchain itself.'
      },
      {
        type: 'heading',
        text: 'The Speed of Modern Threats'
      },
      {
        type: 'paragraph',
        text: 'Recent exploits have demonstrated just how quickly attackers can move. Flash loan attacks execute in a single block. Bridge exploits drain funds within minutes. Mixer services can obscure the trail of stolen assets almost instantaneously.'
      },
      {
        type: 'paragraph',
        text: 'Traditional security measures that rely on batch processing or manual review are simply too slow. By the time a threat is detected through conventional means, the damage is done and the funds are gone.'
      },
      {
        type: 'heading',
        text: 'Components of Real-Time Detection'
      },
      {
        type: 'list',
        items: [
          'Mempool monitoring to catch threats before confirmation',
          'Pattern recognition using machine learning models trained on historical exploits',
          'Cross-chain tracking to follow funds across bridges',
          'Behavioral analysis to identify anomalous transaction patterns',
          'Integration with sanction lists and known malicious addresses'
        ]
      },
      {
        type: 'heading',
        text: 'The Technical Challenge'
      },
      {
        type: 'paragraph',
        text: 'Building real-time detection systems presents significant technical challenges. The system must process thousands of transactions per second, make risk assessments in milliseconds, and do so with high accuracy to avoid false positives that would degrade user experience.'
      },
      {
        type: 'paragraph',
        text: 'Fortgate\'s approach combines on-chain analysis with off-chain intelligence, creating a comprehensive threat detection layer that operates at blockchain speed without introducing latency to legitimate transactions.'
      },
      {
        type: 'heading',
        text: 'Beyond Detection: Automated Response'
      },
      {
        type: 'paragraph',
        text: 'Detection alone is not enough. Modern security systems must also enable automated responses—pausing suspicious transactions, alerting protocol administrators, and in some cases, triggering protective mechanisms like emergency withdrawals or circuit breakers.'
      },
      {
        type: 'paragraph',
        text: 'The goal is to create a security layer that is proactive rather than reactive, preventing exploits rather than merely documenting them after the fact.'
      },
      {
        type: 'heading',
        text: 'The Future of DeFi Security'
      },
      {
        type: 'paragraph',
        text: 'As DeFi matures, real-time threat detection will become table stakes for any serious protocol. Users and institutions will increasingly choose platforms that can demonstrate robust security measures, and regulators will expect nothing less.'
      },
      {
        type: 'paragraph',
        text: 'The protocols that invest in real-time security infrastructure today will be the ones that survive and thrive in the more regulated, institutionally-focused DeFi landscape of tomorrow.'
      }
    ],
    keyTakeaways: [
      'Traditional batch-based security is too slow for blockchain\'s speed—threats execute in seconds.',
      'Real-time detection requires mempool monitoring, ML pattern recognition, and cross-chain tracking.',
      'Detection must be paired with automated response mechanisms for effective protection.',
      'Real-time security infrastructure is becoming essential for protocol survival and institutional adoption.'
    ],
    codeSnippet: `async function detectThreat(tx) {
  // Parallel analysis for speed
  const [patternRisk, addressRisk, behaviorRisk] = await Promise.all([
    analyzePattern(tx),
    checkAddressReputation(tx.from, tx.to),
    assessBehavior(tx)
  ]);
  
  const threatLevel = calculateThreatScore(patternRisk, addressRisk, behaviorRisk);
  
  if (threatLevel > CRITICAL_THRESHOLD) {
    await triggerAutomatedResponse(tx, threatLevel);
  }
  
  return { threatLevel, shouldBlock: threatLevel > BLOCK_THRESHOLD };
}`
  },
  'zero-friction-mass-adoption': {
    title: 'Zero Friction: The Key to Mass Adoption in Crypto',
    subtitle: 'Crypto has proven it can move value globally, permissionlessly, and in real time. Yet despite more than a decade of innovation, mass adoption remains elusive. The barrier is no longer technological capability—it is friction.',
    category: 'TECHNOLOGY',
    image: '/images/blog5.jpg',
    author: {
      name: 'Emily Chen',
      date: 'Oct 11, 2023',
      readTime: '5 min read',
      avatar: '/images/placeholder-avatar.png'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Crypto has proven it can move value globally, permissionlessly, and in real time. Yet despite more than a decade of innovation, mass adoption remains elusive. The barrier is no longer technological capability—it is friction.'
      },
      {
        type: 'paragraph',
        text: 'Every additional step, wallet pop-up, signature request, unclear warning, or compliance flow introduces cognitive and emotional cost for users. For an industry built on efficiency, crypto is still surprisingly hard to use. Zero friction is not a nice-to-have feature; it is the foundation for scale.'
      },
      {
        type: 'heading',
        text: 'Friction Is the Real Bottleneck'
      },
      {
        type: 'paragraph',
        text: 'When new users interact with crypto, they face a steep learning curve: managing private keys, understanding gas fees, choosing networks, avoiding scams, and navigating unfamiliar interfaces. For institutions, the friction appears elsewhere—unclear compliance requirements, fragmented tooling, and operational risk.'
      },
      {
        type: 'paragraph',
        text: 'Each point of friction reduces conversion, trust, and long-term engagement. In traditional fintech, teams obsess over removing milliseconds from flows. In crypto, we often accept broken UX as the cost of decentralization. That tradeoff is no longer acceptable.'
      },
      {
        type: 'heading',
        text: 'Zero Friction Does Not Mean Zero Security'
      },
      {
        type: 'paragraph',
        text: 'One of the biggest misconceptions in crypto is that better security must come at the expense of user experience. In reality, poorly designed systems create more risk by encouraging unsafe behavior—copy-pasting addresses, bypassing warnings, or relying on centralized custodians out of convenience.'
      },
      {
        type: 'paragraph',
        text: 'True zero-friction systems make the secure path the easiest path. Smart defaults, automation, and invisible safeguards reduce both user error and attack surfaces.'
      },
      {
        type: 'paragraph',
        text: 'Security should feel seamless, not intimidating.'
      },
      {
        type: 'heading',
        text: 'Infrastructure, Not Interfaces, Is the Real Solution'
      },
      {
        type: 'paragraph',
        text: 'Most UX problems in crypto are symptoms of deeper infrastructure gaps. Frontends can only abstract so much if the underlying systems are fragmented.'
      },
      {
        type: 'paragraph',
        text: 'Zero friction requires infrastructure that:'
      },
      {
        type: 'list',
        items: [
          'Handles complexity behind the scenes',
          'Automates risk detection and response',
          'Integrates compliance without interrupting user flows',
          'Works across chains and standards'
        ]
      },
      {
        type: 'paragraph',
        text: 'When infrastructure is designed correctly, users should not need to understand blockchain mechanics to benefit from them.'
      },
      {
        type: 'heading',
        text: 'Compliance Without Disruption'
      },
      {
        type: 'paragraph',
        text: 'Compliance is often blamed for friction, but poorly implemented compliance is the real issue. Static KYC checks, manual reviews, and blanket restrictions create unnecessary barriers, especially for low-risk users.'
      },
      {
        type: 'paragraph',
        text: 'Behavior-based models, real-time monitoring, and privacy-preserving compliance allow platforms to reduce friction while increasing safety. Instead of stopping every user at the door, systems can adapt dynamically to risk.'
      },
      {
        type: 'paragraph',
        text: 'Zero friction is not about removing rules—it is about applying them intelligently.'
      },
      {
        type: 'heading',
        text: 'The Path to Mass Adoption'
      },
      {
        type: 'paragraph',
        text: 'Mass adoption will not come from educating every user to become a crypto expert. It will come from building systems that feel familiar, intuitive, and trustworthy—without compromising on decentralization or security.'
      },
      {
        type: 'paragraph',
        text: 'The winners in the next phase of crypto will not be the platforms with the most features, but the ones with the least visible complexity.'
      },
      {
        type: 'paragraph',
        text: 'Zero friction is not the absence of controls.'
      },
      {
        type: 'paragraph',
        text: 'It is the presence of thoughtful design, resilient infrastructure, and user-first thinking.'
      },
      {
        type: 'paragraph',
        text: 'In crypto, adoption will follow simplicity.'
      }
    ],
    keyTakeaways: [
      'Friction is the primary barrier to crypto mass adoption, not technology.',
      'Zero friction does not mean zero security—it means making security seamless.',
      'Infrastructure design, not just UI, determines user experience quality.',
      'Compliance can be implemented without disrupting user flows through intelligent design.'
    ],
    codeSnippet: `class ZeroFrictionCompliance {
  constructor() {
    this.riskEngine = new RealTimeRiskEngine();
    this.automation = new ComplianceAutomation();
  }
  
  processTransaction(tx) {
    // Seamless compliance check
    const risk = this.riskEngine.assess(tx);
    if (risk.isLow) {
      return this.automation.approve(tx);
    }
    return this.handleHighRisk(tx);
  }
}`
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = articleData[params.slug]

  if (!article) {
    return (
      <main className="min-h-screen bg-primary">
        <Navbar />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[40px] font-montserrat font-bold text-white mb-4">Article not found</h1>
          <Link href="/blog" className="text-accent hover:underline">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Tag */}
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[40px] font-montserrat font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            {article.subtitle}
          </p>

          {/* Featured Image */}
          <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
            {article.image && !article.image.includes('placeholder') ? (
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-accent/20 rounded-full border-4 border-accent/30"></div>
              </div>
            )}
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            {article.content.map((section: any, index: number) => {
              if (section.type === 'heading') {
                return (
                  <h2 key={index} className="text-[40px] font-montserrat font-bold text-white mt-12 mb-6">
                    {section.text}
                  </h2>
                )
              }
              if (section.type === 'paragraph') {
                return (
                  <p key={index} className="text-white/80 text-lg leading-relaxed mb-6">
                    {section.text}
                  </p>
                )
              }
              if (section.type === 'list') {
                return (
                  <ul key={index} className="list-disc list-inside text-white/80 text-lg mb-6 space-y-2 ml-4">
                    {section.items.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )
              }
              return null
            })}
          </div>

          {/* Key Takeaways */}
          <div className="mt-16 p-8 bg-accent/10 border border-accent/20 rounded-2xl">
            <h3 className="text-[40px] font-montserrat font-bold text-white mb-6">KEY TAKEAWAYS</h3>
            <ul className="space-y-4">
              {article.keyTakeaways.map((takeaway: string, index: number) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-accent text-xl mt-1">•</span>
                  <p className="text-white/80 text-lg flex-1">{takeaway}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
        
        </div>
      </article>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-[40px] font-montserrat font-bold text-white mb-4">Stay ahead of compliance</h2>
            <p className="text-white/70 text-lg mb-8">
              Get the latest regulatory updates and technical deep-dives delivered straight to your inbox.
            </p>
          </div>

          <NewsletterForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}

