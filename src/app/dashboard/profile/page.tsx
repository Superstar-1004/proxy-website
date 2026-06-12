import { requireAuth } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import { ProfileForm } from '@/components/dashboard/ProfileForm';

export default async function ProfilePage() {
  const user = await requireAuth();
  const dbUser = await prisma.user.findUnique({ where: { id: user.id } });

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-900">Profile</h1>
      <p className="mt-1 text-neutral-500">Manage your account settings.</p>
      <ProfileForm initialName={dbUser?.name ?? ''} email={dbUser?.email ?? ''} />
    </div>
  );
}
