import React from 'react';
import { Sparkles, Shirt, UtensilsCrossed, Wrench, ConciergeBell, ShoppingCart } from 'lucide-react';

export const servicesData = [
  {
    id: 'housekeeping',
    title: 'Housekeeping',
    desc: 'Impeccable cleanliness and room care.',
    icon: Sparkles,
    detailHeading: 'Comprehensive Hotel Housekeeping Solutions',
    details: 'Our dedicated housekeeping teams ensure that every guest room, suite, and public space adheres to international 5-star cleanliness standards. From daily turndown services to deep sanitization and linen management, SWISZTA delivers flawless presentation.'
  },
  {
    id: 'laundry',
    title: 'Laundry Services',
    desc: 'High-quality laundry and linen care.',
    icon: Shirt,
    detailHeading: 'Industrial & Hotel Linen Logistics',
    details: 'State-of-the-art commercial laundry facilities handling guest garments, plush towels, bed linens, and staff uniforms. We utilize eco-friendly detergents, delicate fabric care techniques, and rapid turnaround schedules.'
  },
  {
    id: 'catering',
    title: 'Catering & F&B',
    desc: 'Delicious culinary experiences.',
    icon: UtensilsCrossed,
    detailHeading: 'Exquisite Dining & Banquet Operations',
    details: 'From executive breakfast buffets to fine dining and room service operations, our culinary chefs and front-of-house staff create memorable gastronomic experiences for your hotel guests.'
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    desc: 'Preventive and corrective maintenance.',
    icon: Wrench,
    detailHeading: 'Facility Management & Engineering',
    details: 'Keep your property running without interruption. Our qualified engineers manage HVAC systems, plumbing, electrical infrastructure, swimming pool maintenance, and emergency repair protocols 24/7.'
  },
  {
    id: 'concierge',
    title: 'Concierge',
    desc: 'Personalised guest assistance.',
    icon: ConciergeBell,
    detailHeading: 'Front Desk & Guest Relations',
    details: 'Warm hospitality from arrival to departure. Our multilingual concierge team assists guests with travel bookings, VIP welcomes, luggage handling, transportation, and curated local recommendations.'
  },
  {
    id: 'procurement',
    title: 'Procurement',
    desc: 'Smart sourcing and cost-effective solutions.',
    icon: ShoppingCart,
    detailHeading: 'Hospitality Supply Chain & Purchasing',
    details: 'Leverage SWISZTA’s bulk purchasing power to secure premium hotel amenities, eco-friendly guest toiletries, high-thread-count linens, and cleaning consumables at competitive wholesale pricing.'
  }
];

export default function ServicesBar({ onSelectService }) {
  return (
    <div className="container services-bar-wrapper">
      <div className="services-grid">
        {servicesData.map((item) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={item.id} 
              className="service-card"
              onClick={() => onSelectService(item)}
            >
              <div className="service-icon-box">
                <IconComponent size={26} />
              </div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
