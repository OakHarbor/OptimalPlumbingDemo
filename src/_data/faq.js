const client = require("./client.js");

module.exports = [
    {
        id: "pressure",
        question: "Will I be pressured into a bigger repair than I need?",
        answer: "No. We'll walk you through your options, from a minimal repair to a full system upgrade, and leave the decision to you. It's your house, your budget, and your call. Some homeowners just want their running water back today. Others are ready to invest in a long-term fix. Either way, you'll get honest information and no sales pressure.",
    },
    {
        id: "different",
        question: "What makes Optimal Plumbing different?",
        answer: "Three things. Thorough plumbing: we put more rigor into diagnostics and planning up front, so you get a solid plan and a repair that lasts. Communication: we listen carefully to what you need and want. Warranty and value: you get the warranty of a big business at small-business prices. Our goal is to be your trusted plumber for life.",
    },
    {
        id: "warranty",
        question: "Do you offer a warranty on your work?",
        answer: "Yes. Our work is backed by a warranty, and our goal is to give you the warranty of a big business at small-business prices. Coverage can vary with the type of job, so we'll go over exactly what's covered for your specific project before any work starts. No surprises after the fact.",
    },
    {
        id: "services",
        question: "What services do you provide?",
        answer: "Our main services are residential service plumbing, remodels, and water heaters, including tankless. We also handle plumbing diagnostics, finding and repairing leaks, boilers and hydronics, repipes, drain cleaning, water filtration, sump pumps, sewage ejector pumps, showers, toilets, faucets, garbage disposals, and gas piping. If it's plumbing in your home, ask us.",
    },
    {
        id: "remodels",
        question: "Are you experienced with remodels and new construction?",
        answer: "Yes. Our founder has a background in new construction, remodeling, and service plumbing. That means we know how a system should be laid out from scratch, how to work with the plumbing already in your walls, and what tends to fail years later. We handle remodel plumbing from rough-in through final fixtures.",
    },
    {
        id: "schedule",
        question: "How do I schedule a service call?",
        answer: `Call us at <a href="tel:${client.phoneForTel}">${client.phoneFormatted}</a> or use our <a href="/contact/">contact page</a> to send a message with a short description of the problem. We'll get back to you to find a time that works. If you're not sure what's wrong, that's fine. Tell us what you're seeing and hearing, and we'll take it from there.`,
    },
    {
        id: "repair-or-replace",
        question: "Should I repair or replace my water heater?",
        answer: "It depends on the problem and the heater's age. A bad thermostat, heating element, or gas valve can often be repaired affordably. A leaking tank can't be fixed and needs replacement. If your heater is older and starting to struggle, putting money into it may only buy a little time. We'll diagnose it and give you an honest recommendation.",
    },
    {
        id: "tankless",
        question: "Is a tankless water heater worth it?",
        answer: "For some homes, yes. Tankless units provide continuous hot water, take up less space, and don't spend energy keeping a tank hot. They cost more up front, and switching often requires gas line, venting, or electrical upgrades. Whether it's worth it depends on your household's hot water use and your home's setup. We'll help you weigh it.",
    },
    {
        id: "hidden-leak",
        question: "What are the signs of a hidden leak?",
        answer: "Watch for a water bill that rises without explanation, the sound of running water when everything is off, musty smells, stains or soft spots on walls and ceilings, warm spots on floors, or a water meter that keeps moving with all fixtures off. Any of these is worth a call. Hidden leaks do more damage the longer they run.",
    },
    {
        id: "emergency",
        question: "What should I do in a plumbing emergency before you arrive?",
        answer: "Shut off the water. For a single fixture, use the shutoff valve under the sink or behind the toilet. For a burst pipe or major leak, close your main water shutoff valve. For a leaking water heater, close its cold supply valve and turn off the gas or breaker. If you smell gas, leave the house and call your gas utility from outside.",
    },
];
