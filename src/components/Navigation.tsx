'use client';
import { useRouter } from 'next/navigation';
import { selectedNavPage } from '@/atoms/states';
import { useRecoilState } from 'recoil';
import classNames from 'classnames';
import { NAV_ITEMS } from '@/constants/NavItems';

function Navigation() {
	const router = useRouter();
	const [selectedPage, setSelectedPage] = useRecoilState(selectedNavPage);

	const handleNavClick = (label: string, path: string) => {
		router.push(path);
		setSelectedPage(label);
	};

	return (
		<div>
			<div className="w-300pxr h-full bg-nav-color">
				<div className="flex flex-col pt-60pxr pl-39pxr">
					<img
						src="/assets/images/Navigation/repick_logo.png"
						className="w-111pxr h-32pxr"
					/>

					<div className="pt-60pxr text-lg font-bold leading-27pxr">
						{NAV_ITEMS.map((item) => (
							<div
								key={item.label}
								className={classNames('pb-24pxr cursor-pointer', {
									'text-white': selectedPage === item.label,
									'text-unSelected-color': selectedPage !== item.label,
								})}
								onClick={() => handleNavClick(item.label, item.path)}
							>
								{item.label}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
