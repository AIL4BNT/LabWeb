// ============= ANIMATIONS & SCROLL EFFECTS ============= 

// Toggle Research Cards
function toggleCard(card) {
    card.classList.toggle('active');
}

function setResearchThemeDetail(theme, activeCard) {
    const detail = document.getElementById('researchThemeDetail');
    const title = document.getElementById('researchThemeTitle');
    const body = document.getElementById('researchThemeBody');
    const cards = document.querySelectorAll('.research-theme-clickable[data-theme]');

    if (!detail || !title || !body) return;

    const themes = {
        diseases: {
            title: 'Brain Disorders- Where Heterogeneity is the Lock and AI is the Key',
            paragraphs: [
                'Neuropsychiatric disorders are inherently heterogeneous, often presenting as overlapping syndromes driven by multiple risk factors, biological variants, and interacting pathophysiological processes. For example, depression may co-occur with frontotemporal dementia, which itself spans diverse clinical variants including behavioural, semantic, agrammatic, logopenic, and motor forms. This complexity poses significant challenges for accurate diagnosis and the development of targeted therapies.',
                'Emerging evidence suggests that the brain\'s network architecture holds critical insights into this heterogeneity. At AI4BNT, we develop linear and nonlinear mathematical models, along with statistically explainable AI frameworks, to identify network-based biomarkers from multimodal brain MRI data.'
            ],
            closing: 'Highlighted works in brain disorders are listed below.',
            publications: [
                'Kashyap, R., Ouyang, G., Sommer, W., Zhou, C. (2015). Neuroanatomic localization of priming effects for famous faces with latency corrected Event related potentials, Brain Research, 1632, 58-72',
                'Kashyap, R., Bhattacharjee, S., Sommer, W., Zhou, C. (2018). Repetition Priming Effects for Famous Faces through Dynamic Causal Modelling of Latency-Corrected Event-Related Brain Potentials. European Journal of Neuroscience, 49(10), 1330-1347',
                'Kashyap. R, Kong R., Bhattacharjee, S., Lia, J., Zhou, H., Yeo, B.T. (2019). Individual specific fMRI subspaces improve Functional Connectivity prediction of Behaviour. Neuroimage, 189, 804-812. (Corresponding author)',
                'Kashyap, R., Eng, GK., Bhattacharjee, S., Gupta B, Ho, R., Ho, C., Zhang, M., Mahendran, R., Sim K., Chen, S. A. (2021). Individual-based Approaches reveal Fronto-Striato-Limbic dissociation and Cerebellar-Visual association in Obsessive-Compulsive Disorder. Scientific Reports, 11(1), p.1354.',
                'Kashyap, R., Bharadwaj, S., Bhattacharjee, S., Sunny, A. S, Udupa, K., Kumar, M., Pal, P K, Bharath R D (2023). The Perturbational Map of Low Frequency Repetitive Transcranial Magnetic Stimulation of Primary Motor Cortex in Movement Disorders. Brain Disorders, 9, 10071.',
                'Bhattacharjee, S., Udupa, K., Venkatasubramanian, B., Oishi, K., Desmond, J. E., G., Rapp, & Chen, S. A., Kashyap, R. (2024). Alignment of Behaviour and tDCS Stimulation Site Induces Maximum Response: Evidence from Online tDCS and ERP. Scientific Reports, 14(1), 19715.',
                'Bhattacharjee S, Chakraborty I., Kashyap R., Sreeraj VS, Arshad F, Yamini B.K, Bharath R.D., Sivakumar P.T., Venkatsubramanian G., Alladi S., Oishi K., Desmond J.E, Chen SHA, Sathyaprabha TN & Udupa K. (2025). Possible Target Regions for Noninvasive Modulation of Language Network in Primary Progressive Aphasia: A Narrative Review. Brain Disorder, 19, 100255.',
                'Khokhar, S.K., Kumar, M., Arshad, F., Goyal, S., Tiwari, M., Thanissery, N., Ramakrishnan, S., Nagaraj, C., Kashyap, R., Mangalore, S. and Gandhi, T.K. (2025). Multiplex connectomics reveal altered networks in frontotemporal dementia: A multisite study. Network Neuroscience, 9(2), pp.615-630.',
                'Kashyap, R., Zhou C, Tsapkini K, Desmond, J. E., Chen SHA, Bharath, RD, Bhattacharjee S (2025). Longitudinal Evaluation of Common and Unique Brain Networks In Variants of Primary Progressive Aphasia. Alzheimer\'s Research and Therapy, 17(1), 1-14.',
                'Bhattacharjee S, Sivakumar P.T., Venkatsubramanian G., Oishi K., Chen SHA, Tsapkini K, Desmond J.E, Sathyaprabha TN, Udupa K. Kashyap R. (2025). The Role of Structural and Functional Parameters in Designing Pathology-Specific tDCS Protocols for Primary Progressive Aphasia. Alzheimer\'s Research and Therapy, 17(1), 156.',
                'Mehta, M.U, Bhattacharjee, S., Govindaraj R., Ramachandraiah, C., Bolo, N., Bharath, D.R, Thirthalli, J., Venkatasubramanian, G., Gangadhar, B., Pascual-Leone, A., Keshavan, M., Kashyap, R. Sex-dependent network-level cortical plasticity and its association with antipsychotic response in schizophrenia: Evidence from a personalized-TMS-fMRI study, Journal of Neurophysiology (Under Revision).'
            ]
        },
        risk: {
            title: 'Decoding Brain Signatures of Risk Factors',
            paragraphs: [
                'Human life is shaped by daily habits, environmental exposures, trauma, and upbringing. These diverse experiences leave measurable imprints on the brain. At AI4BNT, we investigate these brain signatures using multimodal neuroimaging and advanced AI approaches.',
                'In adults above 30 years, we observe that distinct brain signatures are associated with lifestyle and behavioral factors such as smoking, alcohol use, substance use, and antisocial behavior. In children and adolescents below 18 years, these signatures often reflect early-life adversity, including abuse and neglect.',
                'Our research extends across the lifespan, aiming to understand how these factors influence brain ageing and contribute to the development of cognitive and neuropsychiatric disorders at different stages of life.'
            ],
            closing: 'Selected publications on risk signatures are listed below.',
            publications: [
                'Kashyap, R., Bhattacharjee, S., Yeo, B.T. and Chen, S.A. (2019). Maximizing Dissimilarity in Resting State detects Heterogeneous Subtypes in Healthy population associated with High Substance-Use and Problems in Antisocial Personality. Human Brain Mapping, 41(5), 1261-1273.',
                'Kashyap, R., Holla, B.; Bhattacharjee, S.; Sharma, E.; Mehta, M.U, Vaidya, N.; Bharath, R.D.; Murthy, P.; Basu, D.; Subodh, B. N.; Singh, R.L.; Lourembam, R.; Chakrabarti, A.; Kartik, K.; Kalyanram, K.; Kumaran, K.; Krishnaveni, G.; Krishna, M.; Kuriyan, R.; Kurpad, S.S.; Desrivières, S.; Purushottam, M.; Barker, G.J; Orfanos, P.D; Hickman, M.; Heron, J; Toledano, M.; Schumann,G.; Benegal, V.; and Consortium on Vulnerability to Externalizing Disorders and Addictions (cVEDA) (2024). Childhood adversities characterize the heterogeneity in the brain pattern of individuals during neurodevelopment, Psychological Medicine, 113.',
                'Kashyap, R., L. Tanushree, Mayo Clinic Study of Ageing, Bhattacharjee, S. (2026). Brain Ageing and Cardiometabolic risk factors: Prioritising Blood Pressure Control for Dementia Prevention, Alzheimer\'s and Dementia (under revision).'
            ]
        },
        personalized: {
            title: 'Personalised Medicine- The future of treatment',
            paragraphs: [
                'Non-invasive brain stimulation techniques, such as Transcranial Direct Current Stimulation (tDCS) and Transcranial Magnetic Stimulation (TMS), are emerging as promising tools for treating neuropsychiatric disorders. However, current approaches often rely on standardized anatomical targets and fixed stimulation parameters, overlooking individual variability in brain connectivity and clinical presentation.',
                'At AI4BNT, we address this gap through computational modeling and personalized approaches. Using techniques such as the finite element method, we simulate electric field propagation in the brain and integrate these models with advanced mathematical frameworks to tailor stimulation parameters to an individual\'s brain anatomy.',
                'Our group has developed four open-source toolboxes that enable MRI-based personalization of tDCS parameters. These tools have been experimentally validated, demonstrating the feasibility and effectiveness of individualized stimulation strategies. To the best of our knowledge, this is among the first efforts to personalize tDCS current dosing and demonstrate its therapeutic potential.',
                'Our lab collaborates with Dr. Sagarika Bhattacharjee (MBBS, MD, PhD), <a href="https://cn-pn.github.io/LabWeb/" target="_blank" rel="noopener noreferrer" style="color: #1d4ed8; text-decoration: underline; text-underline-offset: 2px;">Clinical Neurophysiology &amp; Precision Neuromodulation Lab</a> to advance these clinical applications and translate them toward patient care through personalized neuromodulation, clinically informed modeling, and translational research partnerships.'
            ],
            closing: 'Selected publications on personalised treatment are listed below.',
            publications: [
                'Kashyap, R., Bhattacharjee, S, Desmond, J. E., Rapp, B., Oishi, K., Chen, S. A. (2019). Simulation Analyses of tDCS Montages for the investigation of Dorsal and Ventral pathways. Scientific Reports, 9(1), pp.1-17.',
                'Kashyap, R., Bhattacharjee, S, Arumugam, R., Oishi, K., Desmond, J. E., Chen, S. (2020). i-SATA: A MATLAB based toolbox to estimate electric field generated by tDCS in an individual brain. Journal of Neural Engineering, 17(5), p.056034.',
                'Bhattacharjee, S., Kashyap, R., Goodwill, M.A., O\'Brien, B., Rapp, B., Oishi, K., Desmond, J. E., & Chen, S. A. (2021). Sex Difference in tDCS Current Mediated by Changes in Cortical Anatomy: A Study across Young, Middle and Older adults. Brain Stimulation, 15(1), 125-140.',
                'Kashyap, R., Bhattacharjee, S., Arumugam, R., Bharath, R.D, Udupa, K., Oishi, K., Desmond, J. E., Chen, S. A. & Guan, C. (2021). Focality Oriented Selection of Current Dose for Transcranial Direct Current Stimulation. Journal of Personalised Medicine, 11(9), 940.',
                'Kashyap, R., Bhattacharjee S, Bharath, RD, Venkatsubramanian, G, Udupa, K, S., Bashir, S., Oishi, K., Desmond, J. E., Chen, S. A. & Guan, C. (2022). Variation in Cerebrospinal fluid of Specific Regions regulate Focality in Transcranial Direct Current Stimulation. Frontiers of Human Neuroscience, 16, 952602.',
                'Bhattacharjee S, Kashyap R., Sreeraj VS, Sivakumar P.T., Venkatsubramanian G., Alladi S., Oishi K., Desmond J.E, Chen SHA, Sathyaprabha TN & Udupa K. (2024). Comparison of Personalised Doses in High Definition and Conventional tDCS for Neuropsychiatric Disorders using Electric field Modelling. Brain Sciences, 14(2), 1162.',
                'Bhattacharjee S, Sivakumar P.T., Venkatsubramanian G., Bharath R.D; Oishi K., Chen SHA, Tsapkini K, Desmond J.E, Sathyaprabha TN, Udupa K., Kashyap R. (2025). Personalized Transcranial Direct Current Stimulation for Behavioral and Neurophysiologic Outcomes. JAMA Network Open, 8(8):e2526148.'
            ]
        }
    };

    const selected = themes[theme] || themes.diseases;

    cards.forEach((card) => card.classList.remove('is-active'));
    if (activeCard) {
        activeCard.classList.add('is-active');
    }

    title.textContent = selected.title;
    body.innerHTML = [
        ...selected.paragraphs.map((paragraph) => `<p>${paragraph}</p>`),
        `<h4>${selected.closing}</h4>`,
        `<ol>${selected.publications.map((publication) => `<li>${publication}</li>`).join('')}</ol>`
    ].join('');
    detail.dataset.theme = theme;
    detail.classList.add('is-visible');
    detail.style.animation = 'none';
    void detail.offsetWidth;
    detail.style.animation = 'researchThemePop 180ms ease-out';
}

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and items
    document.querySelectorAll('.research-card, .team-member, .project-item, .pub-item').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Make publication cards clickable when they contain a link/DOI
    document.querySelectorAll('.pub-item').forEach((card) => {
        const link = card.querySelector('a[href]');
        if (!link) return;

        card.classList.add('is-clickable');
        card.addEventListener('click', (e) => {
            // Let normal clicks on links work as-is
            if (e.target && e.target.closest && e.target.closest('a')) return;
            window.open(link.href, link.target || '_blank');
        });
    });

    const researchCards = document.querySelectorAll('.research-theme-clickable[data-theme]');
    researchCards.forEach((card) => {
        const theme = card.dataset.theme;
        card.addEventListener('click', () => setResearchThemeDetail(theme, card));
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setResearchThemeDetail(theme, card);
            }
        });
    });

});
