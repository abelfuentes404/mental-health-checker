import { Brain, Heart, Shield, MapPin, Users, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { unstable_setRequestLocale } from 'next-intl/server';

// Enable static rendering for these locales
export const dynamic = 'force-static';

export default function HomePage({ params }: { params: { locale: string } }) {
    // Enable static rendering
    unstable_setRequestLocale(params.locale);

    const t = useTranslations('home');
    const tc = useTranslations('common');

    const tests = [
        {
            id: 'phq9',
            title: t('test1.title'),
            description: t('test1.description'),
            questions: 9,
            time: t('test1.time'),
            color: 'from-blue-500 to-cyan-500',
            icon: Heart
        },
        {
            id: 'gad7',
            title: t('test2.title'),
            description: t('test2.description'),
            questions: 7,
            time: t('test2.time'),
            color: 'from-purple-500 to-pink-500',
            icon: Brain
        }
    ];

    const features = [
        {
            icon: Shield,
            title: t('feature1.title'),
            description: t('feature1.description')
        },
        {
            icon: Users,
            title: t('feature2.title'),
            description: t('feature2.description')
        },
        {
            icon: MapPin,
            title: t('feature3.title'),
            description: t('feature3.description')
        }
    ];

    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <section className="text-center pt-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        {t('title')} <span className="text-primary-600">{t('highlightedTitle')}</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        {t('subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="xl" variant="primary" href={`/${params.locale}/test/depresion`} className="flex items-center justify-center gap-2">
                            <Heart className="h-5 w-5" />
                            {tc('startTest')}
                        </Button>
                        <Button size="xl" variant="secondary" href={`/${params.locale}/recursos`} className="flex items-center justify-center gap-2">
                            <MapPin className="h-5 w-5" />
                            {tc('findHelp')}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <Shield className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                    <div>
                        <h3 className="text-lg font-semibold text-yellow-800 mb-2">{t('disclaimerTitle')}</h3>
                        <div
                            className="text-yellow-700"
                            dangerouslySetInnerHTML={{ __html: t('disclaimerText') }}
                        />
                    </div>
                </div>
            </section>

            {/* Available Tests */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    {t('testsTitle')}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {tests.map((test) => {
                        const Icon = test.icon;
                        return (
                            <div
                                key={test.id}
                                className={`bg-gradient-to-br ${test.color} rounded-2xl p-8 text-white transform transition-transform hover:scale-[1.02]`}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <Icon className="h-10 w-10" />
                                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                        {test.questions} {params.locale === 'en' ? 'questions' : 'preguntas'}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{test.title}</h3>
                                <p className="mb-6 opacity-90">{test.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        <span>{test.time}</span>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        className="text-white border-white/30 hover:bg-white/10"
                                        href={`/${params.locale}/test/${test.id}`}
                                    >
                                        {tc('startTest')}
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Features */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                    {t('featuresTitle')}
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center p-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-6">
                                <feature.icon className="h-8 w-8 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}