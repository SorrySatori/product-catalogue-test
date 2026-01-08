import { DataSource } from 'typeorm'
import { Product } from '../../entities/product.entity'

export class ProductSeeder {
  public async run(dataSource: DataSource): Promise<void> {
    const productRepository = dataSource.getRepository(Product)

    const existingProducts = await productRepository.count()
    if (existingProducts > 0) {
      console.log('⏭️  Products already exist, skipping seed...')
      return
    }

    const products = [
      {
        name: 'PDF Generátor',
        description: 'Generátor PDF dle šablon a vyplněných hodnot proměnných',
        extendedDescription: 'PDF Generátor je open-source nástroj pro vytváření PDF dokumentů na základě předdefinovaných šablon. Umožňuje dynamické vyplňování proměnných a generování profesionálních dokumentů s minimálním úsilím.',
        url: 'https://github.com/ProRocketeers/pdf-generator',
        icon: 'P',
        category: 'Nástroje',
        tags: ['PDF', 'Generátor', 'Šablony', 'Dokumenty'],
        installable: true,
        heroImage: undefined,
        features: [
          {
            icon: '🎯',
            title: 'Šablony na míru',
            description: 'Vytvářejte vlastní šablony PDF dokumentů s dynamickými proměnnými a podmíněným obsahem.'
          },
          {
            icon: '⚡',
            title: 'Rychlé generování',
            description: 'Generujte PDF dokumenty během několika sekund díky optimalizovanému zpracování.'
          },
          {
            icon: '🎨',
            title: 'Profesionální vzhled',
            description: 'Vytvářejte dokumenty s profesionálním designem a formátováním.'
          },
          {
            icon: '💼',
            title: 'API integrace',
            description: 'Snadno integrujte do vašich aplikací pomocí REST API rozhraní.'
          },
          {
            icon: '🔒',
            title: 'Bezpečné',
            description: 'Všechna data jsou zpracovávána bezpečně s podporou šifrování.'
          },
          {
            icon: '⭐',
            title: 'Open Source',
            description: 'Plně open-source řešení s aktivní komunitou a pravidelnou podporou.'
          }
        ],
        teamMembers: [
          { name: 'Jan Novák', role: 'Lead Developer', avatar: '👨‍💻' },
          { name: 'Petra Svobodová', role: 'Backend Developer', avatar: '👩‍💻' },
          { name: 'Martin Dvořák', role: 'DevOps Engineer', avatar: '👨‍🔧' },
          { name: 'Lucie Procházková', role: 'QA Engineer', avatar: '👩‍🔬' },
          { name: 'Tomáš Novotný', role: 'UI/UX Designer', avatar: '👨‍🎨' },
          { name: 'Eva Černá', role: 'Product Manager', avatar: '👩‍💼' }
        ],
        teamDescription: 'Náš tým zkušených vývojářů a designérů pracuje na vytváření nejlepších nástrojů pro generování PDF dokumentů. Věříme v open-source a komunitní přístup k vývoji softwaru.'
      },
      {
        name: 'URL Shortener',
        description: 'Zkracovač URL se statistikami o kliknutích',
        extendedDescription: 'URL Shortener je moderní nástroj pro zkracování dlouhých URL adres s pokročilými analytickými funkcemi. Sledujte kliknutí, geografickou polohu návštěvníků a další statistiky v reálném čase.',
        url: 'https://github.com/ProRocketeers/url-shortener',
        icon: 'U',
        category: 'Nástroje',
        tags: ['URL', 'Zkracovač', 'Analytika', 'Statistiky'],
        installable: true,
        heroImage: undefined,
        features: [
          {
            icon: '🔗',
            title: 'Zkrácení URL',
            description: 'Zkraťte dlouhé URL adresy na krátké, snadno zapamatovatelné odkazy.'
          },
          {
            icon: '📊',
            title: 'Detailní statistiky',
            description: 'Sledujte počet kliknutí, geografickou polohu a další metriky v reálném čase.'
          },
          {
            icon: '🎯',
            title: 'Vlastní aliasy',
            description: 'Vytvářejte vlastní krátké URL s přizpůsobenými názvy pro lepší branding.'
          },
          {
            icon: '🔐',
            title: 'Heslem chráněné odkazy',
            description: 'Chraňte své odkazy heslem pro zvýšenou bezpečnost.'
          },
          {
            icon: '⏰',
            title: 'Časově omezené odkazy',
            description: 'Nastavte datum vypršení platnosti pro dočasné odkazy.'
          },
          {
            icon: '📱',
            title: 'QR kódy',
            description: 'Automaticky generujte QR kódy pro každý zkrácený odkaz.'
          }
        ],
        teamMembers: [
          { name: 'David Král', role: 'Full Stack Developer', avatar: '👨‍💻' },
          { name: 'Anna Horáková', role: 'Frontend Developer', avatar: '👩‍💻' },
          { name: 'Jakub Marek', role: 'Data Analyst', avatar: '👨‍💼' },
          { name: 'Karolína Veselá', role: 'UX Designer', avatar: '👩‍🎨' },
          { name: 'Michal Kučera', role: 'Backend Developer', avatar: '👨‍💻' },
          { name: 'Simona Malá', role: 'Marketing Specialist', avatar: '👩‍💼' }
        ],
        teamDescription: 'Specializujeme se na vytváření nástrojů pro správu a analýzu URL adres. Náš tým kombinuje technickou expertízu s uživatelsky přívětivým designem.'
      },
      {
        name: 'QR Generator',
        description: 'Generátor QR kódů',
        extendedDescription: 'QR Generator je výkonný nástroj pro vytváření QR kódů s podporou různých typů dat, barev a stylů. Ideální pro marketing, platby, kontaktní informace a mnoho dalšího.',
        url: 'https://github.com/ProRocketeers/qr-generator',
        icon: 'Q',
        category: 'Nástroje',
        tags: ['QR', 'Generátor', 'Kódy', 'Marketing'],
        installable: true,
        heroImage: undefined,
        features: [
          {
            icon: '📱',
            title: 'Různé typy QR kódů',
            description: 'Vytvářejte QR kódy pro URL, text, email, telefon, WiFi a mnoho dalšího.'
          },
          {
            icon: '🎨',
            title: 'Vlastní design',
            description: 'Přizpůsobte barvy, tvar a logo vašich QR kódů podle vašeho brandingu.'
          },
          {
            icon: '📊',
            title: 'Sledování skenování',
            description: 'Sledujte, kolikrát byl váš QR kód naskenován a odkud.'
          },
          {
            icon: '💾',
            title: 'Různé formáty',
            description: 'Stahujte QR kódy v PNG, SVG, PDF nebo jiných formátech.'
          },
          {
            icon: '🔧',
            title: 'API přístup',
            description: 'Integrujte generování QR kódů do vašich aplikací pomocí API.'
          },
          {
            icon: '⚡',
            title: 'Rychlé generování',
            description: 'Vytvářejte QR kódy okamžitě bez čekání nebo registrace.'
          }
        ],
        teamMembers: [
          { name: 'Filip Němec', role: 'Lead Developer', avatar: '👨‍💻' },
          { name: 'Tereza Pokorná', role: 'Designer', avatar: '👩‍🎨' },
          { name: 'Ondřej Pospíšil', role: 'Backend Developer', avatar: '👨‍💻' },
          { name: 'Markéta Šťastná', role: 'Frontend Developer', avatar: '👩‍💻' },
          { name: 'Petr Kolář', role: 'DevOps', avatar: '👨‍🔧' },
          { name: 'Veronika Růžičková', role: 'QA Tester', avatar: '👩‍🔬' }
        ],
        teamDescription: 'Jsme tým nadšenců pro QR technologie a mobilní marketing. Naším cílem je poskytovat nejlepší nástroje pro generování a správu QR kódů.'
      },
      {
        name: 'QA Workplayground',
        description: 'Flexibilní základ pro automatizované testování',
        extendedDescription: 'QA Workplayground je komplexní framework pro automatizované testování webových aplikací s využitím Playwright a Cypress. Poskytuje strukturu, best practices a užitečné utility pro efektivní testování.',
        url: 'https://github.com/ProRocketeers/qa-workplayground',
        icon: 'Q',
        category: 'Testování',
        tags: ['QA', 'Testování', 'Playwright', 'Cypress', 'Automatizace'],
        installable: true,
        heroImage: undefined,
        features: [
          {
            icon: '🎯',
            title: 'Playwright & Cypress',
            description: 'Podpora pro oba nejpopulárnější testovací frameworky s jednotnou strukturou.'
          },
          {
            icon: '🔧',
            title: 'Připravené utility',
            description: 'Sada užitečných pomocných funkcí pro běžné testovací scénáře.'
          },
          {
            icon: '📊',
            title: 'Reporting',
            description: 'Detailní reporty s screenshoty, videi a logováním pro snadné debugování.'
          },
          {
            icon: '🚀',
            title: 'CI/CD integrace',
            description: 'Připravené konfigurace pro GitHub Actions, GitLab CI a další platformy.'
          },
          {
            icon: '📝',
            title: 'Best practices',
            description: 'Implementace osvědčených postupů pro psaní udržitelných testů.'
          },
          {
            icon: '🔄',
            title: 'Paralelní běh',
            description: 'Spouštějte testy paralelně pro rychlejší zpětnou vazbu.'
          }
        ],
        teamMembers: [
          { name: 'Robert Beneš', role: 'QA Lead', avatar: '👨‍💻' },
          { name: 'Kristýna Marková', role: 'Test Automation Engineer', avatar: '👩‍💻' },
          { name: 'Lukáš Fiala', role: 'Senior QA Engineer', avatar: '👨‍🔬' },
          { name: 'Barbora Nováková', role: 'QA Engineer', avatar: '👩‍🔬' },
          { name: 'Adam Černý', role: 'DevOps Engineer', avatar: '👨‍🔧' },
          { name: 'Nikola Svobodová', role: 'Documentation Writer', avatar: '👩‍💼' }
        ],
        teamDescription: 'Náš QA tým se zaměřuje na vytváření robustních testovacích frameworků a nástrojů. Věříme v automatizaci a kontinuální zlepšování kvality softwaru.'
      }
    ]

    const createdProducts = await productRepository.save(products)
    console.log(`✅ Successfully seeded ${createdProducts.length} products!`)
  }
}
